<?php ob_start();?>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$title = "COGIP - Log in"; ?>

      <section class="jumbotron bg-warning mb-0">
            <article class="display-4 text-center">
                        <img src="./img/cogip_logo.png" alt="La Cogip">
            </article>
            <p class="lead text-center text-dark font-weight-bold">The intranet becomes child's play !</p>
            <?php if(empty($_SESSION)){ ?>
            <a href="?action=login" class="col-md-2 btn btn-primary mx-auto d-block font-weight-bold" >Log in</a>
            <?php } else { ?>
            <p class="lead text-center font-weight-bold">Hi <span class="text-primary text-capitalize"><?= $_SESSION['username'] ?></span>, how are your today ?</p>
            <a href="?action=adminPanel" class="col-md-2 btn btn-outline-primary mx-auto d-block font-weight-bold">Admin Panel</a>
            <?php  }?>
      </section>

<?php
$content = ob_get_clean();    
require('base.php');