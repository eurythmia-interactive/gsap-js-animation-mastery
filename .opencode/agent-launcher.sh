#!/bin/bash

# GSAP Tutorial Agent Launcher
# Usage: ./agent-launcher.sh [agent] [task]

AGENTS_DIR="$HOME/.opencode/agents"
SKILLS_DIR="$HOME/.opencode/skills"

show_help() {
    echo "GSAP Tutorial Agent Launcher"
    echo ""
    echo "Usage: ./agent-launcher.sh [agent] [task-description]"
    echo ""
    echo "Agents:"
    echo "  master         - Master Orchestrator (coordinates all)"
    echo "  animation      - Animation Engineer (GSAP animations)"
    echo "  visual         - Visual Designer (colors, gradients)"
    echo "  tutorial      - Tutorial Architect (HTML structure)"
    echo "  debug          - Debug Agent (fixes issues)"
    echo "  docs           - Documentation Agent (updates docs)"
    echo ""
    echo "Examples:"
    echo "  ./agent-launcher.sh master \"Create lesson 16 about morphSVG\""
    echo "  ./agent-launcher.sh debug \"Fix lesson 13 animation\""
    echo "  ./agent-launcher.sh visual \"Add gradients to lesson 12\""
    echo ""
    echo "Skills available in: $SKILLS_DIR"
    echo "Agents available in: $AGENTS_DIR"
}

if [ -z "$1" ] || [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
    show_help
    exit 0
fi

AGENT="$1"
TASK="$2"

case "$AGENT" in
    master)
        AGENT_FILE="$AGENTS_DIR/master/MASTER-ORCHESTRATOR.md"
        ;;
    animation)
        AGENT_FILE="$AGENTS_DIR/slaves/ANIMATION-ENGINEER.md"
        ;;
    visual)
        AGENT_FILE="$AGENTS_DIR/slaves/VISUAL-DESIGNER.md"
        ;;
    tutorial)
        AGENT_FILE="$AGENTS_DIR/slaves/TUTORIAL-ARCHITECT.md"
        ;;
    debug)
        AGENT_FILE="$AGENTS_DIR/slaves/DEBUG-AGENT.md"
        ;;
    docs|documentation)
        AGENT_FILE="$AGENTS_DIR/slaves/DOCUMENTATION-AGENT.md"
        ;;
    *)
        echo "Unknown agent: $AGENT"
        echo ""
        show_help
        exit 1
        ;;
esac

if [ ! -f "$AGENT_FILE" ]; then
    echo "Agent file not found: $AGENT_FILE"
    exit 1
fi

echo "========================================="
echo "GSAP Tutorial Agent System"
echo "========================================="
echo ""
echo "Agent: $AGENT"
echo "Task: $TASK"
echo ""
echo "Agent file: $AGENT_FILE"
echo ""
echo "To use this agent, load the agent file in OpenCode"
echo "and provide the task description."
echo ""
echo "Example task prompt:"
echo "-----------------------------------"
case "$AGENT" in
    master)
        echo "Act as the Master Orchestrator. $TASK"
        echo "Delegate to appropriate slave agents: animation, visual, tutorial, debug, docs"
        ;;
    animation)
        echo "Act as the Animation Engineer. $TASK"
        echo "Follow the GSAP best practices and animation patterns."
        ;;
    visual)
        echo "Act as the Visual Designer. $TASK"
        echo "Apply color theory, gradients, and visual variety."
        ;;
    tutorial)
        echo "Act as the Tutorial Architect. $TASK"
        echo "Create proper HTML structure with navigation."
        ;;
    debug)
        echo "Act as the Debug Agent. $TASK"
        echo "Diagnose the issue and provide solutions."
        ;;
    docs|documentation)
        echo "Act as the Documentation Agent. $TASK"
        echo "Update changelog, TODO, and other docs."
        ;;
esac
echo "-----------------------------------"