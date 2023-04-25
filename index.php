<?php 
include 'imports.php'; 
require("components/navBar.php");
require("footer.php");

?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>  
    <meta charset="UTF-8">
    
    <script src="../api/api.js"></script>
   
    <title>Orvalho</title>
   
    <link rel="icon" type="image/png" href="assets/images/icons/favicon.png">
    <script src="loader.js"></script>

  </head>
  
            
            
  <body class="bg-grey">
    <div class="page-wrapper">
      <div class=" d-md-none d-lg-none ">
        <img class=" d-flex justify-content-center" style="width:content; " src="https://orvalhosj.com/assets/images/demos/demo10/slides/slidem-4.png" />
      </div>
      <div class="col-12  d-md-none d-lg-none ">
        <h1 style="text-align:center ; font-size:30px;">COMECE A SUA <br> JORNADA DE <br>PERFUMES <div class="d-flex justify-content-center">
            <a href="planos.php">
              <button href="https://orvalhosj.com/=planos.php" style="width:300px; margin-top: 30px;  color:#fff ; background-color: #141414; 
border-radius: 10px; margin-right: 10px;" class="btn  ">Assine</button>
            </a>
          </div>
        </h1>
      </div>
      <main class="main">
        <div class="row d-sm-show mt-8  d-flex justify-content-center align-items-center">
          <div class="col-6">
            <div>
              <h1 style="text-align:center ; font-size:50px;  ">COMECE A SUA <br> JORNADA DE <br>PERFUMES <div>
                  <a href="planos.php">
                    <button href="https://orvalhosj.com/=planos.php" style="width:300px; margin-top: 30px;  color:#fff ; background-color: #141414; 
border-radius: 10px; margin-right: 10px;" class="btn  ">Assine</button>
                  </a>
                </div>
              </h1>
            </div>
          </div>
          <div class="col-6">
            <img src="https://orvalhosj.com/admin/uploads/"/>
															
          </div>
        </div>
        <div class="container-fluid">
          <h3 style="margin-top: 5%;" class="how-it-works"> ENTENDA COMO FUNCIONAMOS </h3>
          <div class="swiper-container
                                            swiper-theme category-banner-3cols
                                            pl-2 pr-2 
                                            appear-animate" data-swiper-options="{
                                            'spaceBetween': 20,
                                            'slidesPerView': 1,
                                            'breakpoints': {
                                            '576': {
                                            'slidesPerView': 2
                                            },
                                            '992': {
                                            'slidesPerView': 3
                                            }
                                            }
                                            }">
            <div class="swiper-wrapper row
                                                cols-lg-3 cols-sm-2 cols-1">
              <div class="swiper-slide banner
                                                    banner-fixed
                                                    category-banner">
                <figure class="br-sm">
                  <img src="assets/images/demos/demo10/category/1-1.jpg" alt="Category
                                                            Banner" width="400" height="200" style="background-color:
                                                            #4F4B48;" />
                </figure>
                <div class="banner-content1">
                  <h3 class="
                                                            text-white2 mt-2
                                                            text-capitalize -12
                                                            c"> FAZ O SEU CADASTRO <br>
                  </h3>
                  <h5 class="text-normal">Faça seu cadastro e responda o quiz.</h5>
                </div>
              </div>
              <!-- End of Category Banner -->
              <div class="swiper-slide banner
                                                    banner-fixed
                                                    category-banner">
                <figure class="br-sm">
                  <img src="assets/images/demos/demo10/category/1-2.jpg" alt="Category
                                                            Banner" width="400" height="200" style="background-color:
                                                            #A3A3A3;" />
                </figure>
                <div class="banner-content1">
                  <h3 class="
                                                            text-white2
                                                            mt-2
                                                            ls-25"> ATIVA UM PLANO <br>
                  </h3>
                  <h5 class="ls-normal">Escolha seu plano e quantos perfumes deseja receber.</h5>
                </div>
              </div>
              <!-- End of Category Banner -->
              <div class="swiper-slide banner
                                                    banner-fixed
                                                    category-banner">
                <figure class="br-sm">
                  <img src="assets/images/demos/demo10/category/1-3.jpg" alt="Category
                                                            Banner" width="400" height="200" style="background-color:
                                                            #151A1E;" />
                </figure>
                <div class="banner-content1">
                  <h3 class="banner-title
                                                            text-white2 mt-2
                                                            text-capitalize"> RECEBA SEUS PERFUMES <br>
                  </h3>
                  <h5>Com resultado do quiz e sua wishlist enviaremos o perfume que mais combina com você. </h5>
                </div>
              </div>
              <!-- End of Category Banner -->
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="d-flex justify-content-center " style="margin-bottom:10%; margin-left:auto; margin-right:auto">
            <a href="https://orvalhosj.com/planos.php">
              <button href="https://orvalhosj.com/planos.php" style=" width: 350px;color:#fff ; background-color: #141414; 
                                border-radius: 10px; " class="btn   mb-10 ">INICIE SUA JORNADA</button>
            </a>
          </div>
          <!-- End of Iocn Box Wrapper -->
          <div class="row ">
            <div class="d-flex justify-content-center d-sm-show">
              <img style="border-radius:10px ;  width: 98%;" src="./assets/images//demos/demo10/banner-1.png" alt="">
            </div>
            <div style=" margin-top: -30%;margin-bottom:10%;" class="col-6 d-sm-show ">
              <h1 style="text-align:center ; font-size:40px; color:#fff">GRANDE <br> VARIEDADE DE <br>PERFUMES <br>
                <a href="perfumes.php">
                  <button href="perfumes.php" style="width:fit-content;  color:#fff ; background-color: #c7a17f; 
                                border-radius: 10px; border:none; margin-right: 10px;" class="btn d-sm-show ">Venha conhecer</button>
                </a>
              </h1>
            </div>
          </div>
          <div class="d-flex justify-content-center d-lg-none d-md-none">
            <a href="login.php">
              <img style="margin-bottom:5% ; border-radius:10px ; width:content" src="assets/images/demos/demo10/bannerm-1.png" alt="">
            </a>
          </div>
          <div style=" margin-top: -270px;margin-bottom:150px;" class=" col-12 d-lg-none d-md-none">
            <h1 style="text-align:center ; color:#fff; font-size:40px">GRANDE <br> VARIEDADE DE <br>PERFUMES </h1>
          </div>
          <a class="d-flex justify-content-center d-md-none d-lg-none" href="perfumes.php" style="margin-top:-100px">
            <button href="login.php" style="width:300px;  color:#fff ; background-color: #c7a17f; 
                                border-radius: 10px; border:none " class="btn ">Venha conhecer</button>
          </a>
        </div>
        <div style="border: none" class="swiper-container swiper-theme
                                            icon-box-wrapper
                                            appear-animate br-sm 
                                            mb-10 appear-animate" data-swiper-options="{
                                            'loop': true,
                                            'slidesPerView': 1,
                                            'autoplay': {
                                            'delay': 4000,
                                            'disableOnInteraction':
                                            false
                                            },
                                            'breakpoints': {
                                            '576': {
                                            'slidesPerView': 2
                                            },
                                            '768': {
                                            'slidesPerView': 3
                                            },
                                            '992': {
                                            'slidesPerView': 3
                                            },
                                            '1200': {
                                            'slidesPerView': 2
                                            }
                                            }
                                            }">
          <div class="swiper-wrapper
                                                row cols-md-4
                                                cols-sm-3
                                                cols-1">
            <div class="swiper-slide
                                                    icon-box
                                                    icon-box-side
                                                    text-dark">
              <span class="icon-box-icon
                                                        icon-shipping">
                <img src="assets/images/demos/demo10/imagens/brands_01.png">
              </span>
            </div>
            <div class="swiper-slide
                                                    icon-box
                                                    icon-box-side
                                                    text-dark">
              <span class="icon-box-icon icon-payment">
                <img src="assets/images/demos/demo10/imagens/brands_02.png">
              </span>
            </div>
            <div class="swiper-slide
                                                    icon-box
                                                    icon-box-side
                                                    text-dark">
              <span class="icon-box-icon
                                                        icon-shipping">
                <img src="assets/images/demos/demo10/imagens/brands_03.png">
              </span>
            </div>
            <div class="swiper-slide
                                                    icon-box
                                                    icon-box-side
                                                    text-dark">
              <span class="icon-box-icon icon-payment">
                <img src="assets/images/demos/demo10/imagens/brands_04.png">
              </span>
            </div>
          </div>
          <div>
            <h3 class="how-it-works"> E MUITO MAIS! </h3>
          </div>
        </div>
        <div class="row" style="margin-bottom: 10%;">
          <div class=" d-flex justify-content-center d-sm-show">
            <img style="border-radius:10px ;  width: 98%; max-width:1783px" src="./assets/images//demos/demo10/banner-2.jpg" alt="">
          </div>
          <div class="col-6"></div>
          <div style="margin-top:-30%;" class="col-6 d-sm-show " style="max-width: 1440px;">
            <h1 style="text-align:center ; font-size:40px; color:#fff">PLANOS QUE <br> CABEM NO <br>BOLSO <br>
              <a href="perfumes.php">
                <button href="planos.php" style="width:fit-content;  color:#fff ; background-color: #c7a17f; 
                                border-radius: 10px; border:none; margin-right: 10px;" class="btn d-sm-show ">Venha conhecer</button>
              </a>
            </h1>
          </div>
        </div>
        <div class="d-flex justify-content-center d-md-none d-lg-none">
          <a href="login.php">
            <img style="margin-bottom:100px ; border-radius:10px ; width:content" src="assets/images/demos/demo10/bannerm-2.jpg" alt="">
          </a>
        </div>
        <div style=" margin-top: -350px;margin-bottom:150px;" class=" col-12 d-lg-none  d-md-none">
          <h1 style="text-align:center ; color:#fff; font-size:40px">PLANOS QUE <br> CABEM NO <br>BOLSO </h1>
        </div>
        <a class="d-flex justify-content-center d-lg-none d-md-none" href="planos.php" style="margin-top:-100px">
          <button href="login.php" style="width:300px;  color:#fff ; background-color: #c7a17f; 
                                border-radius: 10px; border:none " class="btn ">Venha conhecer</button>
        </a>
        <div class="filter-with-title d-flex justify-content-center
                                            appear-animate">
          <h3 class="how-it-works "> OS MELHORES AVALIADOS </h3>
        </div>
        <div class="filter-with-title d-flex justify-content-start
                                            appear-animate">
          <ul class="nav-filters  
                                                filter-boxed" data-target="#products-1">
            <li>
              <a href="#" style="margin-left: 30px;" class="nav-filter" data-filter="*">Femininos</a>
            </li>
          </ul>
        </div>
       <div id="feminino"></div>
   

    <div class="filter-with-title d-flex justify-content-start appear-animate" style="margin-left:30px ;">
        <h2 class="title"></h2>
          <ul class="nav-filters filter-boxed" data-target="#products-2">
            <li>
              <a href="#" class="nav-filter" data-filter="*">Masculinos</a>
            </li>
          </ul>
        </div>
         <div id="masculino"></div>
    <div class="grid-space col-xl-5col col-1"></div>
    </div>
    </main>
    <div class="swiper-container swiper-theme" data-swiper-options="{
    'spaceBetween': 20,
    'autoplay': true,
    'slidesPerView': 2,
    'breakpoints': {
        '576': {
            'slidesPerView': 3
        },
        '992': {
            'slidesPerView': 4
        },
        '1200': {
            'slidesPerView': 5
        }
    }
}">
      <div class="swiper-wrapper row cols-xl-5 cols-lg-4 cols-sm-3 cols-2">
        <figure class="swiper-slide instagram
                                            br-sm">
          <a href="#">
            <img src="assets/images/instagram/insta1.jpg" alt="Instagram" width="232" height="232">
          </a>
        </figure>
        <figure class="swiper-slide instagram
                                            br-sm">
          <a href="#">
            <img src="assets/images/instagram/insta2.jpg" alt="Instagram" width="232" height="232">
          </a>
        </figure>
        <figure class="swiper-slide instagram
                                            br-sm">
          <a href="#">
            <img src="assets/images/instagram/insta3.jpg" alt="Instagram" width="232" height="232">
            <div class="instagram-btn">
              <a href="https://orvalhosj.com/#"></a>
              <a href="https://instagram.com/orvalho.sj?igshid=YmMyMTA2M2Y=" class="btn
                                                        white-btn">
                <i class="fab
                                                            fa-instagram"></i> orvalhosj </a>
            </div>
          </a>
        </figure>
        <figure class="swiper-slide instagram
                                            br-sm">
          <a href="#">
            <img src="assets/images/instagram/insta4.jpg" alt="Instagram" width="232" height="232">
          </a>
        </figure>
        <figure class="swiper-slide instagram
                                            br-sm">
          <a href="https://instagram.com">
            <img src="assets/images/instagram/insta5.jpg" alt="Instagram" width="232" height="232">
          </a>
        </figure>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    </div>
    <div class="swiper-scrollbar"></div>
    </div>
    <!-- Start of Footer -->
    <div class="footer__pagina"> </div>
    <!-- End of Footer -->
    </div>
    <a id="scroll-top" class="scroll-top" href="#top" title="Top" role="button">
      <i class="w-icon-angle-up"></i>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35" cy="35" r="34" style="stroke-dasharray: 16.4198, 400;"></circle>
      </svg>
    </a>
    <div class="product product-single
                                product-popup">
      <div class="row gutter-lg">
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="product-gallery
                                            product-gallery-sticky mb-0">
            <div class="product-single-swiper
                                                swiper-container
                                                swiper-theme nav-inner">
              <div class="swiper-wrapper
                                                    row cols-1 gutter-no">
                <div class="swiper-slide">
                  <figure class="product-image">
                    <img src="../admin/uploads/18.png" alt="Product" width="232" height="260" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="product-thumbs-wrap
                                                swiper-container">
              <div class="product-thumbs
                                                    swiper-wrapper">
                <div class="swiper-slide
                                                        product-thumb">
                 <img src="../admin/uploads/18.png" alt="Product" width="232" height="260" />
                </div>
                <div class="swiper-slide
                                                        product-thumb">
                  <img src="../admin/uploads/18.png" alt="Product" width="232" height="260" />
                </div>
                <div class="swiper-slide
                                                        product-thumb">
                   <img src="../admin/uploads/18.png" alt="Product" width="232" height="260" />
                </div>
                <div class="swiper-slide
                                                        product-thumb">
                  <img src="../admin/uploads/18.png" alt="Product" width="232" height="260" />
                </div>
              </div>
              <button class="thumb-up
                                                    disabled">
                <i class="w-icon-angle-left"></i>
              </button>
              <button class="thumb-down
                                                    disabled">
                <i class="w-icon-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    <script>
    
    
     const perfumes = (gender) => {
            return `
<div>
    <h2>${gender === 'feminino' ? 'Feminino' : 'Masculino'}</h2>
    <img src="https://via.placeholder.com/150" alt="Product" />
    <a href="#">Detalhes</a>
</div>`;
        }
    



   function getPerfumes(callback) {
            // Simulando uma chamada AJAX com setTimeout
            setTimeout(() => {
                callback([{name: 'Perfume 1', gender: 'feminino'}, {name: 'Perfume 2', gender: 'masculino'}]);
            }, 1000);
        }

function renderDivs(perfumeList) {
            const feminino = $("#feminino");
            const masculino = $("#masculino");
            perfumeList.forEach((item) => {
                const div = perfumes(item.gender);
                if (item.gender === 'feminino') {
                    feminino.append(div);
                } else {
                    masculino.append(div);
                }
            });
        }

        $(document).ready(function () {
            getPerfumes(function(perfumeList) {
                renderDivs(perfumeList);
            });
        });

    </script>
  </body>