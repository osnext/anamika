#mount the android file image
# added to bash_profile
function mountAndroid { 
	hdiutil attach ~/projects/anamika/android-xk6/android.dmg.sparseimage -mountpoint /Volumes/android;
}

