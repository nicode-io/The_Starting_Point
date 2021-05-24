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

$title = "COGIP - Invoice Details"; 
?>

<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="mr-5 text-info"><i class="fas fa-file-invoice-dollar"></i> Invoice Details</h1>
</section>
<section class="container">
    <article class="column">

        <!-- Invoice details -->
        <section class="col">
            <table class="table">
                <h3><span class="badge badge-primary">Invoice informations</span></h3>
                <tr class="row bg-light text-primary">
                    <th class="col-4">Invoice ID</th>
                    <th class="col-4">Last Name</th>
                    <th class="col-4">First Name</th>
                </tr>
                <?php while($row = $invoiceDetails->fetch()){ ?>
                <tr class="row">
                    <td class="col-4"><?= $row['invoice_number']?></td>
                    <td class="col-4"><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?= $row['last_name']?></a></td>
                    <td class="col-4"><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?= $row['first_name']?></a></td>
                </tr>
                <tr class="row bg-light text-primary">
                    <th class="col-6">Invoice Content</th>
                    <th class="col-6"></th>
                </td>
                <tr class="row">
                    <td class="col-10"><?= $row['invoice_content']?></td>
                    <?php if($_SESSION['type'] == 1) { ?>
                        <td class="col-1"><button class="btn btn-primary btn-warning">EDIT</button></td>
                        <td class="col-1"><button class="ml-2 btn btn-primary btn-danger">DELETE</button></td>
                    <?php } ?>
                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Company for this invoice -->
        <section class="col">
            <table class='table'>
                <h3><span class="badge badge-primary">Companies</span></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-3'>Company</th>
                    <th class='col-3'>Country</th>
                    <th class='col-3'>Type</th>
                    <th class='col-3'>VAT Number</th>
                </tr>
                <?php while($row = $invoiceCompany->fetch()){ ?>
                <tr class="row">
                    <td class='col-3'><a href='index.php?action=detailCompany&id="<?= $row['id']?>"'><?= $row['company_name']?></a></td>
                    <td class='col-3'><?= $row['country']?></td>
                    <td class='col-3'><?= $row['company_type']?></td>
                    <td class='col-3'><?= $row['company_vat']?></td>
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

