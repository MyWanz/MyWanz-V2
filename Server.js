@@ -15,8 +15,8 @@ RUN apt-get install -y curl apt-transport-https lsb-release \
    && apt-get update \
    && apt-get install -y yarn

# Instal tslint dan TypeScript
JALANKAN npm install -g tslint TypeScript
# Instal eslint
RUN npm install -g eslint

# Bersihkan
JALANKAN  apt - dapatkan  autoremove  - y \
