@echo off
setlocal

cd /d "%~dp0"
title sadce - start

if not exist node_modules (
  echo [ERROR] No se encontraron dependencias.
  echo Ejecuta setup.bat primero.
  pause
  exit /b 1
)

echo ==========================================
echo   SADCE - Iniciando servidor local
echo   URL: http://localhost:4000
echo ==========================================
echo.

where pnpm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] pnpm no esta disponible.
  echo Ejecuta setup.bat primero.
  pause
  exit /b 1
)

call pnpm exec next dev --webpack --port 4000
