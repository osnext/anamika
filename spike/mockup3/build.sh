echo "creating app.nw ..."
rm -f app.nw
zip -q -r app.nw package.json app.js index.html resources extjs 
ls -l app.nw
echo "done ..."
