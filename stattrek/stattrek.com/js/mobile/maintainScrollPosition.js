/* 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
This script maintains scroll position when PostBack occurs or when form is submitted. It can be used when
ASP.Net's MaintainScrollPositionOnPostback is not working.
Put the script below in your page where you want to maintain scroll position or in your master page.
Source: http://www.aspsnippets.com/Articles/ASPNet-MaintainScrollPositionOnPostback-not-working-in-Firefox-and-Chrome.aspx
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

    window.onload = function() {

        var scrollY = parseInt('<%=Request.Form["scrollY"] %>');             

        if (!isNaN(scrollY)) {
            window.scrollTo(0, scrollY);
        }

    };

    window.onscroll = function () {

        var scrollY = document.body.scrollTop;
        if (scrollY == 0) {
            if (window.pageYOffset) {
                scrollY = window.pageYOffset;
            }
            else {
                scrollY = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0;
            }

        }

        if (scrollY > 0) {
            var input = document.getElementById("scrollY");
            if (input == null) {
                input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("id", "scrollY");
                input.setAttribute("name", "scrollY");
                document.forms[0].appendChild(input);
            }

            input.value = scrollY;
        }
    };
