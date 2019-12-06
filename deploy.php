<?php
namespace Deployer;

require 'recipe/laravel.php';
require 'vendor/deployer/recipes/recipe/cachetool.php';

// Project name
set('application', 'lavuql');

// Project repository
set('repository', 'git@github.com:Vykonat/lavuql.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);


// Hosts
host('communityrails.ca')
    ->set('deploy_path', '/var/www/html/lavuql')
    ->user('lavuql-deployer')
    ->port(22);

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

// before('deploy:symlink', 'artisan:migrate');
after('deploy:symlink', 'cachetool:clear:opcache');
after('deploy:symlink', 'cachetool:clear:apc');

