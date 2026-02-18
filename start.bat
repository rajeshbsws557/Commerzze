@echo off
REM Daraz E-Commerce Platform - Quick Start Script

echo.
echo ========================================
echo  DARAZ E-COMMERCE PLATFORM
echo  Quick Start Script
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found: 
node --version
echo.

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    pause
    exit /b 1
)

echo ✓ npm found: 
npm --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
) else (
    echo ✓ Dependencies already installed
)

echo.
echo ========================================
echo  STARTING DEVELOPMENT SERVER
echo ========================================
echo.
echo Opening http://localhost:3000 in your browser...
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
call npm run dev

pause
