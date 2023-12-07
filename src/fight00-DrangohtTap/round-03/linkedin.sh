mkdir a
mkdir b

cd a
touch  aurel
touch ilios
touch kevin

cd ../b
touch hard-ilios
cd ..
ln -s a/aurel b/soft-aurel 

chmod 400 a/*
chmod 400 b/hard-ilios
