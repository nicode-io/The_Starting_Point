<?php
// Start recording view
ob_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Test de connexion
if(empty($_SESSION['username'])){
    header('location:./index.php');
    exit();
}

$title = "COGIP - Administration panel"; 
?>

    <!-- Test de connexion -->
 
<section class="jumbotron d-flex justify-content-end">
    <p class="display-4 mr-5 text-info text-center"> Welcome<span class="font-weight-bold text-primary text-capitalize"> <?= $_SESSION['username'] ?></span> !</p>
    
    
</section>
<section class="container">
    <article class="column">

        <!-- Display last created invoices -->
        <section class="col">
            <table class='table'>
            <?php if($_SESSION['type'] == 1) { ?>
                <p class="d-flex justify-content-center">
                    <a class="display-4 mr-4 nav-link btn btn-outline-warning btn-lg text-info col-6" href="?action=userGestion"><i class="fas fa-list"></i> Users list page</a>
                </p>
            <?php } ?>
                <h3 class='text-primary text-right text-info'>Last 5 Invoices</h3>
                <?php if($_SESSION['type'] != 0) { ?>
                    <h3><a href='index.php?action=newInvoice'><span class="btn btn-info"><i class="fas fa-plus"></i> New Invoice </span></a></h3>
            <?php } ?>
                <tr class="row bg-light text-primary">
                    <th class='col-3 text-info'>Invoice ID</th>
                    <th class='col-4 text-info'>Last Name</th>
                    <th class='col-3 text-info'>First Name</th>
                    <th class='col-1'></th>
                    <th class='col-1'></th>
                </tr>
                <?php while($row = $lastInvoices->fetch()){ ?>
                <tr class="row">
                    <td class='col-3'><a href='index.php?action=detailInvoice&id="<?= $row['invoice_id']?>"'><?= $row['invoice_number']?></a></td>

                    <td class='col-4'><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?= $row['last_name']?></a></td>

                    <td class='col-3'><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?= $row['first_name']?></td></a>

                    <?php if($_SESSION['type'] == 1) { ?>
                    <td class='col-1'><button class="btn btn-light border-warning text-center text-warning"><i class="fas fa-edit"></i></button></td>

                    <td class='col-1'><button class="ml-2 btn btn-light border-danger text-center text-danger"><i class="fas fa-times"></i></button></td>
                    <?php } ?>
                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Display last created companies -->
        <section class="col">
            <table class='table'>
                <h3 class='text-primary text-right text-info'>Last 5 Companies</span></h3>
                <?php if($_SESSION['type'] != 0) { ?>
                    <h3><a href='index.php?action=newCompany'><span class="btn btn-info"><i class="fas fa-plus"></i> New Company</span></a></h3>
                <?php } ?>
                <tr class="row bg-light text-primary">
                    <th class='col-3 text-info'>Company Name</th>
                    <th class='col-4 text-info'>Country</th>
                    <th class='col-3 text-info'>Company VAT</th>
                    <th class='col-1'></th>
                    <th class='col-1'></th>
                </tr>
                <?php while($row = $lastCompanies->fetch()){ ?>
                <tr class='row'>
                    <td class='col-3'><a href='index.php?action=detailCompany&id=<?=$row['id']?>'><?= $row['company_name']?></a></td>
                    <td class='col-4'><?= $row['country']?></td>
                    <td class='col-3'><a href='index.php?action=detailCompany&id=<?=$row['id']?>'><?= $row['company_vat']?></a></td>
                    <?php if($_SESSION['type'] == 1) { ?>
                    <td class='col-1'><button class="btn btn-light border-warning text-center text-warning"><i class="fas fa-edit"></i></button></td>
                    <td class='col-1'><button class="ml-2 btn btn-light border-danger text-center text-danger"><i class="fas fa-times"></i></button></td>
                    <?php } ?>
                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Display last created contacts -->
        <section class="col">
            <table class='table'>
                <h3 class='text-primary text-right text-info'>Last 5 Contacts</span></h3>
                <?php if($_SESSION['type'] != 0) { ?>
                    <h3><a href='index.php?action=newCompany'><span class="btn btn-info"><i class="fas fa-plus"></i> New Contact</span></a></h3>
                <?php } ?>
                <tr class="row bg-light text-primary">
                    <th class='col-3 text-info'>Last Name</th>
                    <th class='col-4 text-info'>First Name</th>
                    <th class='col-3 text-info'>Email</th>
                    <th class='col-1'></th>
                    <th class='col-1'></th>
                </tr>
                <?php while($row = $lastContacts->fetch()){ ?>
                <tr class='row'>
                    <td class='col-3'><a href="index.php?action=detailContact&id=<?=$row['id']?>"><?= $row['last_name']?></a></td>
                    <td class='col-4'><a href="index.php?action=detailContact&id=<?=$row['id']?>"><?= $row['first_name']?></a></td>
                    <td class='col-3'><a href="mailto:<?=$row['email']?>"><?= $row['email']?></a></td>
                    <?php if($_SESSION['type'] == 1) { ?>
                        <td class='col-1'><button class="btn btn-light border-warning text-center text-warning"><i class="fas fa-edit"></i></button></td>
                        <td class='col-1'><button class="ml-2 btn btn-light border-danger text-center text-danger"><i class="fas fa-times"></i></button></td>
                     <?php } ?>
                </tr>
                <?php }?>
            </table>
        </section>

    </article>
</section>

<!-- End record and create view -->
<?php

    $content = ob_get_clean();
    
    require('base.php');

