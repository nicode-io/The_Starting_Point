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

$title = "COGIP - Contact Details"; 
?>

<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="pr-5 text-info"><i class="fas fa-address-book"></i> Contact Details</h1>
</section>
<section class="container">
    <article class="column">

        <!-- Contact details -->
        <section class="col">
            <table class='table'>
                <h3><span class="badge badge-primary">Personnal informations</span></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-3'>Last Name</th>
                    <th class='col-3'>First Name</th>
                    <th class='col-3'>Email</th>
                    <th class='col-3'>phone</th>
                </tr>
                <?php while($row = $contactDetails->fetch()){ ?>
                <tr class="row">
                    <td class='col-3'><?= $row['last_name']?></td>
                    <td class='col-3'><?= $row['first_name']?></td>
                    <td class='col-3'><a href="mailto:<?=$row['email']?>"><?= $row['email']?></a></td>
                    <td class='col-3'><?= $row['phone']?></td>

                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Companies for this contact -->
        <section class="col">
            <table class='table'>
                <h3><span class="badge badge-primary">Companies</span></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-3'>Company</th>
                    <th class='col-3'>Country</th>
                    <th class='col-3'>Type</th>
                    <th class='col-3'>VAT Number</th>
                </tr>
                <?php while($row = $contactCompanies->fetch()){ ?>
                <tr class="row">
                    <td class='col-3'><a href='index.php?action=detailCompany&id="<?= $row['company_id']?>"'><?= $row['company_name']?></a></td>
                    <td class='col-3'><?= $row['country']?></td>
                    <td class='col-3'><?= $row['company_type']?></td>
                    <td class='col-3'><?= $row['company_vat']?></td>
                    <?php if($_SESSION['type'] == 1) { ?>
                    <td class='col-1'><button class="btn btn-primary btn-warning">EDIT</button></td>
                    <td class='col-1'><button class="ml-2 btn btn-primary btn-danger">DELETE</button></td>
                    <?php } ?>
                </tr>
                <?php }?>
            </table>
        </section>

        <!-- Invoices for this contact -->
        <section class="col">
            <table class='table'>
                <h3><span class="badge badge-primary">Invoices</span></h3>
                <tr class="row bg-light text-primary">
                    <th class='col-3'>Number</th>
                    <th class='col-9'>Content</th>
                </tr>
                <?php while($row = $contactInvoices->fetch()){ ?>
                <tr class="row">
                    <td><a href='index.php?action=detailInvoice&id="<?= $row['invoice_id']?>"'><?= $row['invoice_number']?></a></td>
                    <td class='col-9'><?= $row['invoice_content']?></td>
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
