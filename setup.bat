@echo off
setlocal

cd /d "%~dp0"
title sadce - setup

echo ==========================================
echo   SADCE - Setup de entorno (Windows)
echo ==========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js no esta instalado.
  echo Instala Node.js 20+ y vuelve a ejecutar este archivo.
  pause
  exit /b 1
)

where pnpm >nul 2>nul
if errorlevel 1 (
  echo [INFO] pnpm no encontrado. Intentando activarlo con Corepack...
  call corepack enable
  call corepack prepare pnpm@10.11.1 --activate
)

where pnpm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] No se pudo activar pnpm automaticamente.
  echo Ejecuta manualmente: corepack enable
  pause
  exit /b 1
)

echo [INFO] Instalando dependencias...
call pnpm install
if errorlevel 1 (
  echo.
  echo [ERROR] Fallo la instalacion de dependencias.
  pause
  exit /b 1
)

echo.
echo [OK] Setup completo.
echo Ejecuta start.bat para iniciar la web.
pause

