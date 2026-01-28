@echo off
echo ===============================
echo AceHub Auto Deploy Baslatiliyor
echo ===============================

REM Proje dizinine git (bat dosyasi ayni klasordeyse gerek yok)
cd /d %~dp0

echo.
echo Git status kontrol ediliyor...
git status

echo.
echo Degisiklikler ekleniyor...
git add .

echo.
echo Commit aliniyor...
git commit -m "auto: ui update"

echo.
echo GitHub'a push atiliyor...
git push

echo.
echo ===============================
echo Islem tamamlandi.
echo Vercel otomatik deploy baslatmistir.
echo ===============================

pause
