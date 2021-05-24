<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="COGIP">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title> <?= $title ?></title>
    </head>     
    <body>

        <!-- Navigation -->
        <nav class="pl-5 navbar navbar-expand-lg navbar-light bg-light ">
            <a class="navbar-brand" href="#"><img src="./img/cogip_logo.png" alt="La Cogip" width="100vw" height="100vw"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Section gauche -->
            <section class="collapse navbar-collapse" id="navbarColor03">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.php">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <?php if(!empty($_SESSION)) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="?action=listInvoices">Invoices</a>
                    </li> 
                    <?php } ?>

                    <?php if(!empty($_SESSION)) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="?action=listCompanies">Companies</a>
                    </li>
                    <?php } ?>
                    
                    <?php if(!empty($_SESSION)) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="?action=listContacts">Contacts</a>
                    </li>
                    <?php } ?>

                    <?php if(!empty($_SESSION && $_SESSION['type'] != 0)) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="?action=newInvoice">New Invoice</a>
                    </li>
                    <?php } ?>

                    <?php if(!empty($_SESSION && $_SESSION['type'] != 0)) { ?>
                     <li class="nav-item">
                        <a class="nav-link" href="?action=newCompany">New Company</a>
                    </li>
                    <?php } ?>

                    <?php if(!empty($_SESSION && $_SESSION['type'] != 0)) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="?action=newContact">New Contact</a>
                    </li>
                    <?php } ?>

                
                </ul>
            </section>
            <!-- Section login -->
            <section class="mx-4">
                <ul class="navbar-nav mr-auto">
                <!-- login panel -->
                <?php if(empty($_SESSION)){ ?>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="true" aria-expanded="false">Members section</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="?action=login">Log in</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"href="?action=registration">Register</a>
                        </div>
                    </li>
                <?php } else { ?>
                    <li class="nav-item mx-2">
                            <a class="nav-link btn btn-outline-info btn-sm text-info" href="?action=adminPanel">Admin Panel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-outline-secondary btn-sm " href="?action=logout"><i class="fa fa-sign-in"></i> Log out</a>
                    <?php } ?>
                    </li>
                </ul>
            </section>
        </nav>

        <!-- Main content -->
        <main role='main'>

            <!-- Dynamic content -->
            <?= $content; ?>

        </main>
        <!-- Footer -->
        <footer class="pl-5 pt-4 mb-md-5 pt-md-5 border-top">            
        <section class="row">
                <article class="col-12 col-md">
                    <img class="mb-2" src='./img/cogip_logo.png' alt="logo" width="60" height="60">
                    <small class="d-block mb-3 text-info ">Vive la COGIP!</small>
                </article>
                <article class="col-6 col-md ">
                    <h5 class="text-info">Direct access</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Invoices</a></li>
                        <li><a class="text-muted " href="#">Contacts</a></li>
                        <li><a class="text-muted" href="#">Companies</a></li>
                    </ul>
                </article>
                <article class="col-6 col-md">
                    <h5 class="text-info">Resources</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Twitter</a></li>
                        <li><a class="text-muted" href="#">Linkedin</a></li>
                        <li><a class="text-muted" href="#">Facebook</a></li>
                        <li><a class="text-muted" href="#">Instagram</a></li>
                    </ul>
                </article>
                <article class="col-6 col-md text-info">
                    <h5 class="text-info">About</h5>
                    <ul class="list-unstyled text-small ">
                    <li><a class="text-muted" href="#">Team</a></li>
                    <li><a class="text-muted" href="#">Legal</a></li>
                    <li><a class="text-muted" href="#">Privacy</a></li>
                    <li><a class="text-muted" href="#">Terms</a></li>
                    </ul>
                </article>
            </section>
        </footer>
        <!-- Scripts -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
            crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/16f591d449.js" crossorigin="anonymous"></script>
    </body>
</html>