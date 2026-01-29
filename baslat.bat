@echo off
cd /d "%~dp0"

echo =====================================
echo  AceHub - Vercel'e Gonderiliyor
echo =====================================

git add -A

git commit -m "update: register page fix"
if errorlevel 1 (
  echo Degisiklik yok, commit atlanıyor...
)

git push

echo.
echo TAMAM ✅ Kod GitHub'a gitti.
echo Vercel otomatik deploy baslatti.
echo.
pause
