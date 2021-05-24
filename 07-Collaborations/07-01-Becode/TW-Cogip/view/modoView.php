
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

$title = "COGIP - Moderation panel"; 
?>

<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="mr-5 text-info"><i class="fas fa-user-shield"></i> Moderation Panel</h1>
</section>
<section class="container">
    <article class="column">

    <!-- New action buttons -->
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
        <!-- Display last created invoices -->
        <section class="col">
            <table class='table'>
                <h3 class='text-primary text-right'>Last 5 Invoices</h3>
                <h3><a href='index.php?action=newInvoice'><span class="btn btn-info"><i class="fas fa-plus"></i> New Invoice </span></a></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-4'>Invoice ID</th>
                    <th class='col-4'>Last Name</th>
                    <th class='col-4'>First Name</th>
                </tr>
                <?php while($row = $lastInvoices->fetch()){ ?>
                <tr class='row'>
                    <td class='col-4'><a href='index.php?action=detailInvoice&id="<?= $row['invoice_id']?>"'><?= $row['invoice_number']?></a></td>
                    <td class='col-4'><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?= $row['last_name']?></a></td>
                    <td class='col-4'><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?= $row['first_name']?></td></a>
                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Display last created companies -->
        <section class="col">
            <table class='table'>
                <h3 class='text-primary text-right'>Last 5 Companies</span></h3>
                <h3><a href='index.php?action=newCompany'><span class="btn btn-info"><i class="fas fa-plus"></i> New Company</span></a></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-4'>Company Name</th>
                    <th class='col-4'>Country</th>
                    <th class='col-4'>VAT Number</th>
                </tr>
                <?php while($row = $lastCompanies->fetch()){ ?>
                <tr class='row'>
                    <td class='col-4'><a href="index.php?action=detailCompany&id=<?=$row['id']?>"><?= $row['company_name']?></a></td>
                    <td class='col-4'><?= $row['country']?></td>
                    <td class='col-4'><?= $row['company_vat']?></td>
                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Display last created contacts -->
        <section class="col">
            <table class='table'>
                <h3 class="text-primary text-right">Last 5 Contacts</span></h3>
                <h3><a href='index.php?action=newContact'><span class="btn btn-info"><i class="fas fa-plus"></i> New Contact</span></a></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-4'>Last Name</th>
                    <th class='col-4'>First Name</th>
                    <th class='col-4'>Email</th>
                </tr>
                <?php while($row = $lastContacts->fetch()){ ?>
                <tr class='row'>
                    <td class='col-4'><a href="index.php?action=detailContact&id=<?=$row['id']?>"><?= $row['last_name']?></td>
                    <td class='col-4'><a href="index.php?action=detailContact&id=<?=$row['id']?>"><?= $row['first_name']?></td>
                    <td class='col-4'><a href="mailto:<?=$row['email']?>"><?= $row['email']?></a></td>
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
?>
