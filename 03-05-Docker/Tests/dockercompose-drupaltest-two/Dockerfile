FROM drupal:8.2

RUN apt update && apt install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html/themes

# Use git to download a repo but just the last branch to speed up process and gain storage space
# This line seems to be broken while authentication failed (so its just for example)
RUN https://git.drupalcode.org/project/bootstrap.git && chown -R www-data:www-data boostrap

WORKDIR /var/www/html
