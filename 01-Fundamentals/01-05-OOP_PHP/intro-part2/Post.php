<?php
    require 'Connection.php';

    
    class Post {
        private $post_title;
        private $post_content;

        public function __construct($post_title, $post_content) {
            $this->post_title = $post_title;
            $this->post_content = $post_content;
        }

        public function addPost($post_title, $post_content) {

        }

        public function removePost($id) {

        }

        public function findAllPosts() {
            $test = new Connection('localhost', '8889', 'oop_php', 'root', 'root');
            $result = $test->sqlQuery('SELECT COUNT(*) as valeur FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = \'BASE TABLE\'');
            echo $result->valeur;
        }
    }