<?php  
//$errors = ["Wrong username/password combination"];
// require("LoginManager.php");
if (count($errors) > 0){ ?>
  <div class="error">
  	<?php foreach ($errors as $error){ ?>
  	  <p><?= $error ?></p>
	  <?php }?>
  </div>
<?php  } ?>

