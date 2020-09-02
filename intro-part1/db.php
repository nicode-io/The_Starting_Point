<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    class Connection {
        private $host;
        private $port;
        private $db_name;
        private $db_username;
        private $db_user_password;
        private $db_connection;

        public function __construct($host, $port, $db_name, $db_username, $db_user_password) {
            $this->host = $host;
            $this->port = $port;
            $this->db_name = $db_name;
            $this->db_username = $db_username;
            $this->db_user_password = $db_user_password;
            $this->dbConnect();
        }

        private function dbConnect() {
            if ($this->db_connection == null) {
                try {
                    $this->db_connection = new PDO('mysql:host=' . $this->host . ';port=' . $this->port . ';dbname=' . $this->db_name . ';charset=utf8', '' . $this->db_username . '', '' . $this->db_user_password . '');
                    $this->db_connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ); // :: call to static variable
                    echo 'connection sucess';
                }
                catch (PDOException $e) {
                    die('Erreur : '.$e->getMessage());
                }
            }
            return $this->db_connection;
        }

        public function sqlQuery($query){
            return $this->dbConnect()->query($query)->fetchAll();
        }
    }

    $test = new Connection('localhost', '8889', 'oop_php', 'root', 'root');
    $result = $test->sqlQuery('SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = \'BASE TABLE\'');
    var_dump($result);