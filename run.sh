#!/bin/bash
#* * * * * /Users/satya/projects/science_fair/check_and_restart_sensor.sh
# Configuration
# ----------------------------------------------------------------
PROJECT_DIR="/Users/satya/projects/science_fair"
SCRIPT_NAME="sensor_collection.py"
LOG_FILE="$PROJECT_DIR/sensor_runtime.log"

# Virtual Environment Path - UPDATE THIS IF DIFFERENT
# Common names: venv, .venv, env
if [ -d "$PROJECT_DIR/venv" ]; then
    VENV_ACTIVATE="$PROJECT_DIR/venv/bin/activate"
elif [ -d "$PROJECT_DIR/.venv" ]; then
    VENV_ACTIVATE="$PROJECT_DIR/.venv/bin/activate"
elif [ -d "$PROJECT_DIR/env" ]; then
    VENV_ACTIVATE="$PROJECT_DIR/env/bin/activate"
else
    # Default fallback - User may need to edit this
    VENV_ACTIVATE="$PROJECT_DIR/venv/bin/activate"
fi
# ----------------------------------------------------------------

# 1. Check if the job is already running
# We use pgrep to look for a python process running our specific script
if pgrep -f "python.*$SCRIPT_NAME" > /dev/null; then
    # Already running, do nothing and exit
    echo "$(date): $SCRIPT_NAME is already running." >> "$LOG_FILE"
    exit 0
fi

# 2. If not running, perform startup actions
echo "$(date): $SCRIPT_NAME not running. Starting..." >> "$LOG_FILE"

# Change to project directory
cd "$PROJECT_DIR" || { echo "Failed to cd to $PROJECT_DIR"; exit 1; }

# 2.1 Activate Python virtual environment
if [ -f "$VENV_ACTIVATE" ]; then
    # shellcheck source=/dev/null
    source "$VENV_ACTIVATE"
else
    echo "$(date): Error - Virtual environment not found at $VENV_ACTIVATE" >> "$LOG_FILE"
    exit 1
fi

# 2.2 Run Python script
# Running in background with nohup to detach it from the shell session
# Redirecting stdout/stderr to a separate log specific to the python script if needed, 
# or just letting the python script handle its own logging (which it does mostly).
# For cron, typically we want to just start it.
# Since the python script has a while True loop, it will run indefinitely.
nohup python "$SCRIPT_NAME" >> "$PROJECT_DIR/sensor_console.log" 2>&1 &

echo "$(date): $SCRIPT_NAME started with PID $!" >> "$LOG_FILE"
