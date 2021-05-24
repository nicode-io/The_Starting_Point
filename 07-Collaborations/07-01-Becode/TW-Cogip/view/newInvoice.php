<?php
    ob_start();

    //Test de connexion
    if(empty($_SESSION['username']) || $_SESSION['type'] == 0){
        header('location:./index.php');
        exit();
    }

    $title= "COGIP - new Invoice";
?>
<section class="jumbotron d-flex flex-row justify-content-end">
    <h1 class="pr-5 text-info"><i class="fas fa-file-invoice-dollar"></i> Create new invoice</h1>
</section>
<section class="column">
    <article class="col">
        <form method="post" action="" class="container col-10">
            <h3 class="text-info">New invoice</h3>
            <label class="p-1 mt-2 text-primary" for="invoice_number">Invoice Number</label>
            <input id="invoice_number" name="invoice_number" class="form-control" type="number" value="<?= $getInvoiceData['invoice_number'] ?>">
            <label class="p-1 mt-2 text-primary" for="company_id">Company</label>
            <select id="company_id" name="company_id" class="form-control">
            <?php
                echo "<option value='$c' selected>$company</option>";
                foreach ($listCompanies as $row) {
                echo "<option value=".$row['id'].">".$row['company_name']."</option>";
            }; ?>
            </select>
            <label class="p-1 mt-2 text-primary" for="user_id">Contact</label>
            <select id="user_id" name="user_id" class="form-control">
            <?php
                echo "<option value='$u' selected>$user</option>";
                foreach ($listContacts as $row) {
                echo "<option value=".$row['id'].">".$row['first_name']." ".$row['last_name']."</option>";
            }; ?>
            </select>
            <label class="p-1 mt-2 text-primary" for="invoice_content">Content</label>
            <textarea id="test" name="invoice_content" class="form-control"><?= $getInvoiceData['invoice_content'] ?></textarea>
            <button class="btn btn-warning mt-2 mb-2 text-dark font-weight-bold" type="submit" name="button" value="<?=$getInvoiceData['id']?>">Envoyer</button>
        </form>
    </article>
</section>
<?php
    $content = ob_get_clean();
    require('base.php');
