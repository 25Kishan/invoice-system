    // hide content 
    $(document).ready(function(){
        $("#user_detail").click (function(){
            $(".t_d").hide();
            $(".u_d").hide();
            $(".u_h").hide();
            $(".c_d").hide();
            $(".user_data").toggle();
        });

        $("#tax_invoice").click(function(){
            $(".u_d").hide();
            $(".user_data").hide();
            $(".u_h").hide();
            $(".c_d").hide();
            $(".t_d").toggle();
        });

        $("#user_dashboard").click(function(){
            $(".user_data").hide();
            $(".t_d").hide();
            $(".u_h").hide();
            $(".c_d").hide();
            $(".u_d").toggle();
        });

        $("#user_history").click(function(){
            $(".user_data").hide();
            $(".t_d").hide();
            $(".u_d").hide();
            $(".c_d").hide();
            $(".u_h").toggle();
        });
        
        $("#credit_debit").click(function(){
            $(".user_data").hide();
            $(".t_d").hide();
            $(".u_h").hide();
            $(".c_d").toggle();
            $(".u_d").hide();
        });

    });

    // Add new customer and saw in customer details

    function arrangeSno()
    {
        var i=0;
        $('#tablee tr').each(function() {
        $(this).find(".sNo").html(i);
        i++;
        });
    }
    $(document).ready(function(){
    $("#addval").click(function(){
        var name = $("#name").val();
        var mnumber = $("#m_number").val();
        var addr = $("#address").val();
        var sno=$('#tablee tr').length;
        var name1 = $("#customer_name").val();
        var mnumber1= $("#customer_number").val();
        var markup = "<tr><td>"+sno+"</td><td>"  + name + "</td><td>" + mnumber+"</td><td>"+addr+"</td></tr>";
        $("#tablee tbody").append(markup);
    });
    });
    // credit & debit
    var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    cname = document.getElementById("cname").value,
                    pname = document.getElementById("pname").value,
                    pprice = document.getElementById("pprice").value;
                    debitno = document.getElementById("dno").value,
                    debitamt = document.getElementById("damount").value,
                    debitdte = document.getElementById("ddate").value;
                    creditno = document.getElementById("cno").value,
                    creditamt = document.getElementById("camount").value,
                    creditdte = document.getElementById("cdate").value;
            
                if(cname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(pname === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(pprice === ""){
                    alert("Age Connot Be Empty");
                    isEmpty = true;
                }
                else if(debitno === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(debitamt === ""){
                    alert("Age Connot Be Empty");
                    isEmpty = true;
                }
                else if(debitdte === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }

                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    cell7 = newRow.insertCell(6),
                    cell8 = newRow.insertCell(7),
                    cell9 = newRow.insertCell(8),
                   
                    cname = document.getElementById("cname").value,
                    pname = document.getElementById("pname").value,
                    pprice = document.getElementById("pprice").value;
                    debitno = document.getElementById("dno").value,
                    debitamt = document.getElementById("damount").value,
                    debitdte = document.getElementById("ddate").value;
                    creditno = document.getElementById("cno").value,
                    creditamt = document.getElementById("camount").value,
                    creditdte = document.getElementById("cdate").value;
            
                cell1.innerHTML = cname;
                cell2.innerHTML = pname;
                cell3.innerHTML = pprice;
                cell4.innerHTML = debitno;
                cell5.innerHTML = debitamt;
                cell6.innerHTML = debitdte;
                cell7.innerHTML = creditno;
                cell8.innerHTML = creditamt;
                cell9.innerHTML = creditdte;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("cname").value = this.cells[0].innerHTML;
                      document.getElementById("pname").value = this.cells[1].innerHTML;
                      document.getElementById("pprice").value = this.cells[2].innerHTML;
                      document.getElementById("dno").value = this.cells[3].innerHTML;
                      document.getElementById("damount").value = this.cells[4].innerHTML;
                      document.getElementById("ddate").value = this.cells[5].innerHTML;
                      document.getElementById("cno").value = this.cells[6].innerHTML;
                      document.getElementById("camount").value = this.cells[7].innerHTML;
                      document.getElementById("cdate").value = this.cells[8].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var cname = document.getElementById("cname").value,
                    pname = document.getElementById("pname").value,
                    pprice = document.getElementById("pprice").value;
                    debitno = document.getElementById("dno").value,
                    debitamt = document.getElementById("damount").value,
                    debitdte = document.getElementById("ddate").value;
                    creditno = document.getElementById("cno").value,
                    creditamt = document.getElementById("camount").value,
                    creditdte = document.getElementById("cdate").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = cname;
                table.rows[rIndex].cells[1].innerHTML = pname;
                table.rows[rIndex].cells[2].innerHTML = pprice;
                table.rows[rIndex].cells[3].innerHTML = debitno;
                table.rows[rIndex].cells[4].innerHTML = debitamt;
                table.rows[rIndex].cells[5].innerHTML = debitdte;
                table.rows[rIndex].cells[6].innerHTML = creditno;
                table.rows[rIndex].cells[7].innerHTML = creditamt;
                table.rows[rIndex].cells[8].innerHTML = creditdte;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("cname").value = "";
                document.getElementById("pname").value = "";
                document.getElementById("pprice").value = "";
                document.getElementById("dno").value = "";
                document.getElementById("damount").value = "";
                document.getElementById("ddate").value = "";
                document.getElementById("cno").value = "";
                document.getElementById("camount").value = "";
                document.getElementById("cdate").value = "";
            }
    // Invoice File
    jQuery(document).ready(function(){
        jQuery().invoice({
            addRow : "#addRow",
            delete : ".delete",
            parentClass : ".item-row",

            price : ".price",
            qty : ".qty",
            total : ".total",
            totalQty: "#totalQty",

            subtotal : "#subtotal",
            discount: "#discount",
            shipping : "#shipping",
            grandTotal : "#grandTotal"
        });
    });

    // User History
    $(document).ready(function(){

    $("#addAct").click(function(){
    var c_name = $("#customer_name").val();

    var c_num = $("#customer_number").val();

    var grandTotal = Number(jQuery($.opt.subtotal).html())
    + Number(jQuery($.opt.shipping).val())
    - Number(jQuery($.opt.discount).val());
    grandTotal = self.roundNumber(grandTotal, 2);
    
    var fullDate = new Date()
    var twoDigitMonth = ((fullDate.getMonth().length+1)===1)?
    (fullDate.getMonth()+1): '0' + (fullDate.getMonth()+1);

    var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();


    var markup1 = "<tr><td>"+c_name+"</td><td>"+c_num+"</td><td>"+currentDate+"</td><td>"+grandTotal+"</td></tr>";
    $("#tablee2 tbody").append(markup1);

    });


    });

    //search function
    function myFun()
    {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("search_val");
        filter = input.value.toUpperCase();
        table = document.getElementById("tablee2");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }

    }

    // Add time in Invoice
    function showTime(){
            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var s = date.getSeconds(); // 0 - 59
            var session = "AM";

            if(h == 0){
                h = 12;
            }

            if(h > 12){
                h = h - 12;
                session = "PM";
            }

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            var time = h + ":" + m + ":" + s + " " + session;
            document.getElementById("time").innerText = time;
            document.getElementById("time").textContent = time;

            setTimeout(showTime, 1000);
        }

        showTime();

        // Add Date in Invoice
        function showDate(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd = '0'+dd
            } 

            if(mm<10) {
                mm = '0'+mm
            } 

            today = dd + '/' + mm + '/' + yyyy;
            document.getElementById("date").innerText = today;
            document.getElementById("date").textContent = today;

            setTimeout(showTime, 1000);
        
        }
        showDate();


        // Reset Form
        function resetform() {
            document.getElementById("myform").reset();
        }



    jQuery(document).ready(function(){
        jQuery().invoice({
            addRow : "#addRow",
            delete : ".delete",
            parentClass : ".item-row",

            price : ".price",
            qty : ".qty",
            total : ".total",
            totalQty: "#totalQty",

            subtotal : "#subtotal",
            discount: "#discount",
            shipping : "#shipping",
            grandTotal : "#grandTotal"
        });
    });
    //Invoice System
    (function (jQuery) {
        $.opt = {};  // jQuery Object

        jQuery.fn.invoice = function (options) {
            var ops = jQuery.extend({}, jQuery.fn.invoice.defaults, options);
            $.opt = ops;

            var inv = new Invoice();
            inv.init();

            jQuery('body').on('click', function (e) {
                var cur = e.target.id || e.target.className;

                if (cur == $.opt.addRow.substring(1))
                    inv.newRow();

                if (cur == $.opt.delete.substring(1))
                    inv.deleteRow(e.target);

                inv.init();
            });

            jQuery('body').on('keyup', function (e) {
                inv.init();
            });

            return this;
        };
    }(jQuery));

    function Invoice() {
        self = this;
    }

    Invoice.prototype = {
        constructor: Invoice,

        init: function () {
            this.calcTotal();
            this.calcTotalQty();
            this.calcSubtotal();
            this.calcGrandTotal();
        },

        /**
         * Calculate total price of an item.
         *
         * @returns {number}
         */
        calcTotal: function () {
            jQuery($.opt.parentClass).each(function (i) {
                var row = jQuery(this);
                var total = row.find($.opt.price).val() * row.find($.opt.qty).val();

                total = self.roundNumber(total, 1);

                row.find($.opt.total).html(total);
            });

            return 1;
        },
        
        /***
         * Calculate total quantity of an order.
         *
         * @returns {number}
         */
        calcTotalQty: function () {
            var totalQty = 0;
            jQuery($.opt.qty).each(function (i) {
                var qty = jQuery(this).val();
                if (!isNaN(qty)) totalQty += Number(qty);
            });

            totalQty = self.roundNumber(totalQty, 1);

            jQuery($.opt.totalQty).html(totalQty);

            return 1;
        },

        /***
         * Calculate subtotal of an order.
         *
         * @returns {number}
         */
        calcSubtotal: function () {
            var subtotal = 0;
            jQuery($.opt.total).each(function (i) {
                var total = jQuery(this).html();
                if (!isNaN(total)) subtotal += Number(total);
            });

            subtotal = self.roundNumber(subtotal, 1);

            jQuery($.opt.subtotal).html(subtotal);

            return 1;
        },

        /**
         * Calculate grand total of an order.
         *
         * @returns {number}
         */
        calcGrandTotal: function () {
            var grandTotal = Number(jQuery($.opt.subtotal).html())
                        + Number(jQuery($.opt.shipping).val())
                        - Number(jQuery($.opt.discount).val());
            grandTotal = self.roundNumber(grandTotal, 1);

            jQuery($.opt.grandTotal).html(grandTotal);

            return 1;
        },

        /**
         * Add a row.
         *
         * @returns {number}
         */
        newRow: function () {
            jQuery(".item-row:last").after('<tr class="item-row"><td class="item-name"><div class="delete-btn"><input type="text" class="form-control item" placeholder="Item" type="text"><a class=' + $.opt.delete.substring(1) + ' href="javascript:;" title="Remove row">X</a></div></td><td><input class="form-control price" placeholder="Price" type="text"> </td><td><input class="form-control qty" placeholder="Quantity" type="text"></td><td><span class="total">0.00</span></td></tr>');
            
            if (jQuery($.opt.delete).length > 0) {
                jQuery($.opt.delete).show();
            }

            return 1;
        },

        /**
         * Delete a row.
         *
         * @param elem   current element
         * @returns {number}
         */
        deleteRow: function (elem) {
            jQuery(elem).parents($.opt.parentClass).remove();

            if (jQuery($.opt.delete).length < 2) {
                jQuery($.opt.delete).hide();
            }

            return 1;
        },

        /**
         * Round a number.
         * Using: http://www.mediacollege.com/internet/javascript/number/round.html
         *
         * @param number
         * @param decimals
         * @returns {*}
         */
        roundNumber: function (number, decimals) {
            var newString;// The new rounded number
            decimals = Number(decimals);

            if (decimals < 1) {
                newString = (Math.round(number)).toString();
            } else {
                var numString = number.toString();

                if (numString.lastIndexOf(".") == -1) {// If there is no decimal point
                    numString += ".";// give it one at the end
                }

                var cutoff = numString.lastIndexOf(".") + decimals;// The point at which to truncate the number
                var d1 = Number(numString.substring(cutoff, cutoff + 1));// The value of the last decimal place that we'll end up with
                var d2 = Number(numString.substring(cutoff + 1, cutoff + 2));// The next decimal, after the last one we want

                if (d2 >= 5) {// Do we need to round up at all? If not, the string will just be truncated
                    if (d1 == 9 && cutoff > 0) {// If the last digit is 9, find a new cutoff point
                        while (cutoff > 0 && (d1 == 9 || isNaN(d1))) {
                            if (d1 != ".") {
                                cutoff -= 1;
                                d1 = Number(numString.substring(cutoff, cutoff + 1));
                            } else {
                                cutoff -= 1;
                            }
                        }
                    }

                    d1 += 1;
                }

                if (d1 == 10) {
                    numString = numString.substring(0, numString.lastIndexOf("."));
                    var roundedNum = Number(numString) + 1;
                    newString = roundedNum.toString() + '.';
                } else {
                    newString = numString.substring(0, cutoff) + d1.toString();
                }
            }

            if (newString.lastIndexOf(".") == -1) {// Do this again, to the new string
                newString += ".";
            }

            var decs = (newString.substring(newString.lastIndexOf(".") + 1)).length;

            for (var i = 0; i < decimals - decs; i++)
                newString += "0";
            //var newNumber = Number(newString);// make it a number if you like

            return newString; // Output the result to the form field (change for your purposes)
        }
    };

    /**
     *  Publicly accessible defaults.
     */
    jQuery.fn.invoice.defaults = {
        addRow: "#addRow",
        delete: ".delete",
        parentClass: ".item-row",

        price: ".price",
        qty: ".qty",
        total: ".total",
        totalQty: "#totalQty",

        subtotal: "#subtotal",
        discount: "#discount",
        shipping: "#shipping",
        grandTotal: "#grandTotal"
    };
