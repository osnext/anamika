echo "creating app.nw ..."
rm -f app.nw
zip -q -r app.nw package.json extjs 
ls -l app.nw
echo "done ..."
