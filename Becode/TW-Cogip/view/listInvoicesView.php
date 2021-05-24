<?php ob_start(); ?>
<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Test de connexion
if(empty($_SESSION['username'])){
    header('location:./index.php');
    exit();
}

$title = "COGIP - Invoices Directory"; ?>


<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="mr-5 text-info"><i class="fas fa-file-invoice-dollar"></i> Invoices Directory</h1>
</section>
<section class="container">
    <article class="column">

        <!-- Invoices section -->
        <section class="col">
            <table class='table'>
                <h3><span class="badge badge-primary">Invoices</span></h3>
                <thead class="thead-light">
                    <tr>
                        <th scope='col'>Number</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Contact ID</th>
                        <th scope='col'>Company ID</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
            <?php while($row = $listInvoices->fetch()){ ?>
                <tr>
                    <td><a href="index.php?action=detailInvoice&id=<?=$row['id']?>"><?= $row['invoice_number']?></a></td>
                    <td><?=$row['invoice_date']?></td>
                    <td><a href='index.php?action=detailContact&id="<?= $row['user_id']?>"'><?=$row['last_name']?></a></td>
                    <td><a href='index.php?action=detailCompany&id="<?= $row['company_id']?>"'><?=$row['company_name']?></a></td>
                    <td class='col-1'><form method="post" action="index.php?action=newInvoice"><button type="submit" name="edit" class="btn btn-primary btn-warning" value=<?=$row['id']?>>EDIT</button></form></td>
                    <td class='col-1'><form method="post"><button type="submit" name="delete" class="ml-2 btn btn-primary btn-danger" value=<?=$row['id']?>>DELETE</button></form></td>
                </tr>
            <?php }?>
            </table>
        </section>

    </article>
</session>


<?php
    $content = ob_get_clean();
    
    require('base.php');
