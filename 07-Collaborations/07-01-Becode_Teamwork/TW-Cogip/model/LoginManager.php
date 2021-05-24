<?php
require_once('./model/Connection.php');
// require_once('./model/errors.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class LoginManager extends Connection {
      
      function register(){
            $db = $this->dbConnect();
            $errors = array();
            $displayError = "";

            $username = "";
            $email    = "";
            $password = "";
            //$emailSanitized = "";

            $db = mysqli_connect('localhost', 'user_cogip', 'cogip_pwd', 'cogip');

            // REGISTER USER
            if (isset($_POST['reg_user'])) {
                  // receive all input values from the form
                  $username = mysqli_real_escape_string($db, $_POST['username']);
                  $username= filter_var($username, FILTER_SANITIZE_STRING);
                  $email = mysqli_real_escape_string($db, $_POST['email']);
                  $email= filter_var($email, FILTER_SANITIZE_EMAIL);
                  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
                  $password_1= filter_var($password_1, FILTER_SANITIZE_STRING);
                  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
                  $password_2= filter_var($password_2, FILTER_SANITIZE_STRING);
                  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

                  // form validation: ensure that the form is correctly filled ...
                  if (empty($username)) { array_push($errors, "Username is required"); }
                  //by adding (array_push()) corresponding error unto $errors array
                  if (empty($email)) { array_push($errors, "Email is required"); }
                  if (empty($password_1)) { array_push($errors, "Password is required"); }
                  if ($password_1 != $password_2) {
                        array_push($errors, "The two passwords do not match");
                  }

                  // first check the database to make sure 
                  // a user does not already exist with the same username and/or email
                  $user_check_query = "SELECT * FROM registration WHERE username='$username' OR email='$email' LIMIT 1";
                  $result = mysqli_query($db, $user_check_query);
                  $user = mysqli_fetch_assoc($result);
                  
                  if ($user) { // if user exists
                        if ($user['username'] === $username) {
                              array_push($errors, "Username already exists");
                        }

                        if ($user['email'] === $email) {
                              array_push($errors, "Email already exists");
                        }
                  } 

                  if (count($errors) == 0) {      
                        // echo "On met tout dans la DB ! ";  // Test d'erreurs affichage
                        $password = ($hashed_password);
                        $query = "INSERT INTO registration (username, email, password, user_type) 
                                    VALUES('$username', '$email', '$password', 0)";
                        mysqli_query($db, $query);
                        header('location:?action=login');
                        exit();
                  } else {
                        foreach($errors as $error){
                              $displayError .= '- ' . $error . '<br />';
                        }
                       return $displayError;
                  }
            }
      }
           
// LOGIN  PART
       function login(){
            $errors = array();
            $displayError = "";
            $db = mysqli_connect('localhost', 'user_cogip', 'cogip_pwd', 'cogip');

            if (isset($_POST['login_user'])) {
                  $username = mysqli_real_escape_string($db, $_POST['username']);
                  $username= filter_var($username, FILTER_SANITIZE_STRING);
                  $password = mysqli_real_escape_string($db, $_POST['password']);
                  $password = mysqli_real_escape_string($db, $_POST['password']);

                  //echo "Phase 1";
            
                 if (empty($username)) {
                         array_push($errors, "Username is required");
                        // $errors = "Empty Username";
                  }
                  if (empty($password)) {
                    array_push($errors, "Password is required");
                        // $pwdError = "Empty Password";
                  }
                  
                  if (count($errors) == 0) {
                        $query = "SELECT * FROM registration WHERE username='$username' ";
                        $results = mysqli_query($db, $query);
                        $row = mysqli_fetch_array($results, MYSQLI_NUM);
                        $verifyPwd = password_verify($password, $row[3]);
                        //var_dump($verifyPwd);
                        if (mysqli_num_rows($results) == 1) {
                              //echo "phase 3";
                              session_start();
                              //echo "Vous êtes connecté ! ";
                              $_SESSION['username'] = $username;
                              $_SESSION['password'] = $password;
                              $_SESSION['type'] = $row['4'];
                              header('location: ?action=adminPanel');
                              exit();
                        }else {
                               array_push($errors,"Wrong username/password combination");
                              // return  "Wrong information or account inexistant";
                              foreach($errors as $error){
                                    $displayError .=  $error;
                              }
                              return $displayError;
                        }
                  } else {
                        foreach($errors as $error){
                              $displayError .= $error . '<br />';
                        }
                        return $displayError;
                  }
            }
      }

      function logout(){
            // session_start();
            unset($_SESSION['username']);
            session_unset();
            header("location:./index.php");
            exit();
      }
}