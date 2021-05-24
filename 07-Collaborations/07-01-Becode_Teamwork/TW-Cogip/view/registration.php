<?php ob_start();?>
<?php
//  include('./login must be split/server.php'); 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(!empty($_SESSION['username'])){
  header('location:./index.php');
  exit();
}

$title = "COGIP - Log in";
?>

<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="mr-5 text-info"><i class="fa fa-id-card"></i> Registration</h1>
</section>

<section class="container">

    <form method="post" action="" class="column">

    <?= $register->register(); ?>


      <div class="form-group col-md-5">
      <h3><span class="col-auto badge badge-warning">Registration</span></h3>
          <label for="exampleInputPassword1">Username</label><span style="color: red; display: inline; float: none;">*</span>
          <input type="text" name="username"  value="<?php $username; ?>" class="form-control"  placeholder="Username" required>
        </div>

      <div class="form-group col-md-5">
          <label for="email">Email address</label><span style="color: red; display: inline; float: none;">*</span>
          <input type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" value="<?php $email; ?>" required>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

      <div class="form-group col-md-5">
          <label for="inputPassword1">Password</label><span style="color: red; display: inline; float: none;">*</span>
          <input type="password" class="form-control"  name="password_1"  placeholder="Password" required>
        </div>

      <div class="form-group col-md-5">
          <label for="inputPassword2">Confirm password</label><span style="color: red; display: inline; float: none;">*</span>
          <input type="password" class="form-control"  name="password_2"  placeholder="Password" required>
        </div>

      <div class="form-group col-md-5">
        <button type="submit" class="btn btn-outline-warning" name="reg_user">Register</button>
      </div>

      <p class="col-md-5">
        Already a member? <a class="text-warning" href="?action=login">Sign in</a>
      </p>

    </form>

  </section>


<?php
$content = ob_get_clean();
require('base.php');
