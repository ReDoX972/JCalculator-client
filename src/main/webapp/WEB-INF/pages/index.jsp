<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="">
    <meta name="author" content="Blueteam">
    <link rel="icon" href="favicon.ico">

    <title>JCalculator</title>

    <link rel="stylesheet" href="<c:url value="/static/css/bootstrap.min.css" />">
    <link rel="stylesheet" href="<c:url value="/static/css/style.css" />" >
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="<c:url value="/static/js/html5shiv.min.js" />"></script>
      <script src="<c:url value="/static/js/respond.min.js" />"></script>
    <![endif]-->
    
    <script src="<c:url value="/static/js/jquery-1.11.2.min.js" />" ></script>
    <script src="<c:url value="/static/js/bootstrap.min.js" />" ></script>
  </head>

  <body>
    <div class="container">
      <div class="header text-center">
        <h3 class="text-muted">Calculator</h3>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-sm-offset-2 col-md-offset-3 col-md-6 col-md-offset-3">
      
        <div class="row">
          <div class="col-xs-12 display_interface">
            <div>
              <p class="" tabindex="1" ></p>
            </div>
          </div>
        </div>

          <div class="row">
            <div class="col-xs-3 text-center calc_btn">
              <div id="calc_btn_mc" class="btn btn-info">
                <p>MC</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div id="calc_btn_mr" class="btn btn-info">
                <p>MR</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div id="calc_btn_ms" class="btn btn-info">
                <p>MS</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div id="calc_btn_c" class="btn btn-default">
                <p>C</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>7</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>8</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>9</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-success calc_btn_op" value="/">
                <p>/</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>4</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>5</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>6</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-success calc_btn_op" value="*">
                <p>x</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>1</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>2</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>3</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-success calc_btn_op" value="-">
                <p>-</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-3 text-center calc_btn">
              <div id="calc_btn_dot" class="btn btn-primary">
                <p>,</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-primary calc_btn_num">
                <p>0</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div id="calc_btn_enter" class="btn btn-danger">
                <p>=</p>
              </div>
            </div>
            <div class="col-xs-3 text-center calc_btn">
              <div class="btn btn-success calc_btn_op" value="+">
                <p>+</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer class="footer text-center">
        <p>© Blueteam 2015</p>
      </footer>

    <script src="<c:url value="/static/js/calculator.js" />" ></script>
    </div> <!-- /container -->
  </body>

</html>