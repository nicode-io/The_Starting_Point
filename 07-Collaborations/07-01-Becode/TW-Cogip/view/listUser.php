<?php
// Start recording view
ob_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Test de connexion
if(empty($_SESSION['username']) || $_SESSION['type'] != 1){
      header('location:?action=adminPanel');
      exit();
  }
$title = "COGIP - user panel gestion"; 
?>

<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="display-4 mr-5 text-info"><i class="fas fa-users-cog"></i> User gestion Panel</h1>
</section>



<article class="column">


<!-- User details -->
<section class="col-8 m-auto">
    <table class='table'>
    <h3>
     <span class="badge badge-info"><i class="fas fa-list"></i> Users list</span>
    </h3>

        <tr class="row bg-light text-primary">
            <th class='col-3 text-info'>Username</th>
            <th class='col-3 text-info'>Email</th>
            <th class='col-5 text-info'>Droits</th>
        </tr>
        <?php while($row = $listUsers->fetch()){ ?>
        <tr class="row">
            <td class='col-3'><?= $row['username']?></td>
            <td class='col-3'><?= $row['email']?></td>
                  <?php
                   if($row['droit'] == 1){
                         $color = "text-danger";
                         $row['droit'] = "Admin";
                        } else if ($row['droit'] == 2){
                              $color = "text-warning";
                              $row['droit'] = "Modo";
                        } else {
                              $row['droit'] = "Normal User";
                              $color = "text-secondary";
                        } ?>
            <td class='col-3 <?= $color ?>''>
                  <?= $row['droit'] ?>
            </td>
            <?php if($_SESSION['type'] == 1) { ?>
                <td class='col-1'><form method="post" action="index.php?action=newCompany"><button type="submit" name="edit" class="btn btn-primary btn-warning" value=<?=$row['id']?>>EDIT</button></form></td>
                <td class='col-1'><form method="post"><button type="submit" name="delete" class="ml-2 btn btn-primary btn-danger" value=<?=$row['id']?>>DELETE</button></form></td>
            <?php } ?>
        </tr>
        <?php }?>
    </table>
</section>
<?php 
//Fin de la mise en mémoire de la page
$content = ob_get_clean();
require('base.php');
