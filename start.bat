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

call pnpm dev

