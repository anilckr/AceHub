@echo off
setlocal

cd /d %~dp0

if not exist .env (
  echo .env bulunamadi. .env.example kopyalaniyor...
  copy .env.example .env >nul
)

echo [1/4] npm install
npm install || goto :err

echo [2/4] prisma generate
npm run prisma:generate || goto :err

echo [3/4] prisma migrate
npm run prisma:migrate || goto :err

echo [4/4] seed (admin)
npm run seed || goto :err

echo.
echo Kurulum tamam. Simdi start.bat calistirabilirsin.
pause
exit /b 0

:err
echo.
echo HATA olustu. Konsol ciktisini kontrol et.
pause
exit /b 1
