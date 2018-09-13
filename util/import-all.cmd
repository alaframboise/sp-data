@echo off
for /f "tokens=*" %%a in (resources.txt) do (
  echo Loading %%a
  mongoimport --jsonArray --db banking --file ../json/%%a.json
)

echo Done
pause