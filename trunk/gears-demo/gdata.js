(function(){
    var gdaa = navigator, gda = undefined, gdba = encodeURIComponent, gdca = parseInt, gdb = String, gdc = window, gdd = Number, gdda = Function, gde = Object, gdf = document, gdea = decodeURIComponent, gdfa = Math;
    function gdga(a, b){
        return a.toString = b
    }
    function gdha(a, b){
        return a.length = b
    }
    function gdia(a, b){
        return a.title = b
    }
    function gdja(a, b){
        return a.width = b
    }
    function gdka(a, b){
        return a.responseText = b
    }
    function gdla(a, b){
        return a.scheme = b
    }
    function gdg(a, b){
        return a.value = b
    }
    function gdma(a, b){
        return a.currentTarget = b
    }
    function gdna(a, b){
        return a.readOnly = b
    }
    function gdoa(a, b){
        return a.target = b
    }
    function gdpa(a, b){
        return a.status = b
    }
    function gdqa(a, b){
        return a.keyCode = b
    }
    function gdra(a, b){
        return a.href = b
    }
    function gdsa(a, b){
        return a.handleEvent = b
    }
    function gdh(a, b){
        return a.type = b
    }
    function gdta(a, b){
        return a.name = b
    }
    function gdua(a, b){
        return a.label = b
    }
    function gdva(a, b){
        return a.height = b
    }
    var gdwa = "appendChild", gdi = "push", gdxa = "statusText", gdya = "stop", gdj = "length", gdza = "title", gdAa = "version", gd = "prototype", gdBa = "test", gdCa = "exec", gdDa = "width", gdEa = "$service_", gdFa = "setTimeout", gdk = "replace", gdGa = "nodeType", gdHa = "document", gdIa = "split", gdJa = "floor", gdKa = "responseText", gdl = "constructor", gdm = "value", gdn = "location", gdo = "indexOf", gdLa = "hasOwnProperty", gdMa = "dispatchEvent", gdNa = "style", gdOa = "nodeName", gdPa = "body", gdQa = "readOnly", gdp = "target", gdq = "call", gdRa = "status", gdSa = "charCode", gdTa = "remove", gdUa = "port", gdVa = "createElement", gdWa = "protocol", gdXa = "keyCode", gdYa = "forEach", gdr = "href", gds = "substring", gdZa = "handleEvent", gd_a = "every", gdt = "type", gd0a = "contains", gd1a = "apply", gd2a = "childNodes", gd3a = "attributes", gd4a = "name", gd5a = "parentNode", gd6a = "fileName", gd7a = "label", gd8a = "height", gd9a = "getTime", gd$a = "join", gdab = "nodeValue", gdbb = gdbb ||
    {}, gdcb = this;
    var gddb = function(a, b){
        var c = a[gdIa]("."), d = gdcb, e;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        while (c[gdj] && (e = c.shift())) 
            if (!c[gdj] && gdu(b)) 
                d[e] = b;
            else 
                d = d[e] ? d[e] : (d[e] = {})
    }, gdeb = function(a, b){
        var c = a[gdIa]("."), d = b || gdcb;
        for (var e; e = c.shift();) 
            if (d[e]) 
                d = d[e];
            else 
                return null;
        return d
    };
    var gdgb = function(a){
        var b = typeof a;
        if (b == "object") 
            if (a) {
                if (typeof a[gdj] == "number" && typeof a.splice != "undefined" && !gdfb(a, "length")) 
                    return "array";
                if (typeof a[gdq] != "undefined") 
                    return "function"
            }
            else 
                return "null";
        else 
            if (b == "function" && typeof a[gdq] == "undefined") 
                return "object";
        return b
    };
    if (gde[gd].propertyIsEnumerable) 
        var gdfb = function(a, b){
            return gde[gd].propertyIsEnumerable[gdq](a, b)
        };
    else 
        gdfb = function(a, b){
            if (b in a) 
                for (var c in a) 
                    if (c == b && gde[gd][gdLa][gdq](a, b)) 
                        return true;
            return false
        };
    var gdu = function(a){
        return typeof a !=
        "undefined"
    };
    var gdhb = function(a){
        return gdgb(a) == "array"
    }, gdib = function(a){
        var b = gdgb(a);
        return b == "array" || b == "object" && typeof a[gdj] == "number"
    }, gdjb = function(a){
        return typeof a == "string"
    };
    var gdkb = function(a){
        return gdgb(a) == "function"
    }, gdlb = function(a){
        var b = gdgb(a);
        return b == "object" || b == "array" || b == "function"
    }, gdob = function(a){
        if (a[gdLa] && a[gdLa](gdmb)) {
            var b = a[gdmb];
            if (b) 
                return b
        }
        a[gdmb] || (a[gdmb] = ++gdnb);
        return a[gdmb]
    }, gdmb = "closure_hashCode_", gdnb = 0, gdpb = function(a){
        var b = gdgb(a);
        if (b ==
        "object" ||
        b == "array") {
            if (a.ba) 
                return a.ba();
            var c = b == "array" ? [] : {};
            for (var d in a) 
                c[d] = gdpb(a[d]);
            return c
        }
        return a
    }, gdqb = function(a, b){
        var c = a.Gl;
        if (arguments[gdj] > 2) {
            var d = Array[gd].slice[gdq](arguments, 2);
            c && d.unshift[gd1a](d, c);
            c = d
        }
        b = a.Il || b;
        a = a.Hl || a;
        var e, g = b || gdcb;
        e = c ? function(){
            var h = Array[gd].slice[gdq](arguments);
            h.unshift[gd1a](h, c);
            return a[gd1a](g, h)
        }
 : function(){
            return a[gd1a](g, arguments)
        };
        e.Gl = c;
        e.Il = b;
        e.Hl = a;
        return e
    }, gdrb = Date.now ||
    function(){
        return (new Date)[gd9a]()
    }, gdv = function(a, b){
        gddb(a, b)
    }, gdsb = function(a, b){
        function c(){
        }
        c.prototype = b[gd];
        a.Wa = b[gd];
        a.prototype = new c;
        a[gd].constructor = a
    };
    gdda[gd].bind = function(a){
        if (arguments[gdj] > 1) {
            var b = Array[gd].slice[gdq](arguments, 1);
            b.unshift(this, a);
            return gdqb[gd1a](null, b)
        }
        else 
            return gdqb(this, a)
    };
    gdda[gd].c = function(a){
        gdsb(this, a)
    };
    var gdtb = function(a, b){
        var c = a[gdj] - b[gdj];
        return c >= 0 && a.lastIndexOf(b, c) == c
    };
    var gdub = function(a){
        return /^[\s\xa0]*$/[gdBa](a == null ? "" : gdb(a))
    };
    var gdvb = function(a){
        return a[gdk](/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    var gdwb = /^[a-zA-Z0-9\-_.!~*'()]*$/, gdxb = function(a){
        a = gdb(a);
        if (!gdwb[gdBa](a)) 
            return gdba(a);
        return a
    }, gdyb = function(a){
        return gdea(a[gdk](/\+/g, " "))
    };
    var gdEb = function(a, b){
        if (b) 
            return a[gdk](gdzb, "&amp;")[gdk](gdAb, "&lt;")[gdk](gdBb, "&gt;")[gdk](gdCb, "&quot;");
        else {
            if (!gdDb[gdBa](a)) 
                return a;
            if (a[gdo]("&") != -1) 
                a = a[gdk](gdzb, "&amp;");
            if (a[gdo]("<") != -1) 
                a = a[gdk](gdAb, "&lt;");
            if (a[gdo](">") != -1) 
                a = a[gdk](gdBb, "&gt;");
            if (a[gdo]('"') != -1) 
                a = a[gdk](gdCb, "&quot;");
            return a
        }
    }, gdzb = /&/g, gdAb = /</g, gdBb = />/g, gdCb = /\"/g, gdDb = /[&<>\"]/;
    var gdFb = function(a, b, c){
        var d = gdu(c) ? a.toFixed(c) : gdb(a), e = d[gdo](".");
        if (e == -1) 
            e = d[gdj];
        return (new Array(gdfa.max(0, b - e) + 1))[gd$a]("0") + d
    };
    var gdHb = function(a, b){
        var c = 0, d = gdvb(gdb(a))[gdIa]("."), e = gdvb(gdb(b))[gdIa]("."), g = gdfa.max(d[gdj], e[gdj]);
        for (var h = 0; c == 0 &&
        h < g; h++) {
            var i = d[h] || "", j = e[h] || "", l = new RegExp("(\\d*)(\\D*)", "g"), k = new RegExp("(\\d*)(\\D*)", "g");
            do {
                var m = l[gdCa](i) || ["", "", ""], n = k[gdCa](j) || ["", "", ""];
                if (m[0][gdj] == 0 && n[0][gdj] == 0) 
                    break;
                var o = m[1][gdj] == 0 ? 0 : gdca(m[1], 10), p = n[1][gdj] == 0 ? 0 : gdca(n[1], 10);
                c = gdGb(o, p) || gdGb(m[2][gdj] == 0, n[2][gdj] == 0) || gdGb(m[2], n[2])
            }
            while (c == 0)
        }
        return c
    }, gdGb = function(a, b){
        if (a < b) 
            return -1;
        else 
            if (a > b) 
                return 1;
        return 0
    };
    gdrb();
    var gdIb = function(a, b, c){
        if (a[gdo]) 
            return a[gdo](b, c);
        if (Array[gdo]) 
            return Array[gdo](a, b, c);
        var d = c == null ? 0 : c < 0 ? gdfa.max(0, a[gdj] + c) : c;
        for (var e = d; e < a[gdj]; e++) 
            if (e in a && a[e] === b) 
                return e;
        return -1
    }, gdJb = function(a, b, c){
        if (a[gdYa]) 
            a[gdYa](b, c);
        else 
            if (Array[gdYa]) 
                Array[gdYa](a, b, c);
            else {
                var d = a[gdj], e = gdjb(a) ? a[gdIa]("") : a;
                for (var g = 0; g < d; g++) 
                    g in e && b[gdq](c, e[g], g, a)
            }
    }, gdKb = function(a, b, c){
        if (a[gd_a]) 
            return a[gd_a](b, c);
        if (Array[gd_a]) 
            return Array[gd_a](a, b, c);
        var d = a[gdj], e = gdjb(a) ? a[gdIa]("") : a;
        for (var g = 0; g < d; g++) 
            if (g in e && !b[gdq](c, e[g], g, a)) 
                return false;
        return true
    }, gdLb = function(a, b){
        if (a[gd0a]) 
            return a[gd0a](b);
        return gdIb(a, b) > -1
    };
    var gdMb = function(a, b){
        var c = gdIb(a, b), d;
        if (d = c != -1) 
            Array[gd].splice[gdq](a, c, 1)[gdj] == 1;
        return d
    };
    var gdNb = function(a){
        for (var b = 1; b < arguments[gdj]; b++) {
            var c = arguments[b];
            gdhb(c) ? a[gdi][gd1a](a, c) : a[gdi](c)
        }
    }, gdOb = function(){
        var a = [];
        for (var b = 0; b < arguments[gdj]; b++) {
            var c = arguments[b];
            gdhb(c) ? a[gdi][gd1a](a, gdOb[gd1a](null, c)) : a[gdi](c)
        }
        return a
    };
    if ("StopIteration" in gdcb) 
        var gdPb = gdcb.StopIteration;
    else 
        gdPb = Error("StopIteration");
    var gdQb = function(){
    };
    gdQb[gd].il = function(){
        throw gdPb;
    };
    gdQb[gd].__iterator__ = function(){
        return this
    };
    var gdRb = function(a, b, c){
        for (var d in a) 
            b[gdq](c, a[d], d, a)
    }, gdSb = function(a){
        var b = 0;
        for (var c in a) 
            b++;
        return b
    }, gdTb = function(a){
        var b = [], c = 0;
        for (var d in a) 
            b[c++] = a[d];
        return b
    }, gdUb = function(a){
        var b = [], c = 0;
        for (var d in a) 
            b[c++] = d;
        return b
    };
    var gdVb = function(a, b){
        for (var c in a) 
            if (a[c] == b) 
                return true;
        return false
    }, gdWb = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], gdXb = function(a){
        var b, c;
        for (var d = 1; d < arguments[gdj]; d++) {
            c = arguments[d];
            for (b in c) 
                a[b] = c[b];
            for (var e = 0; e < gdWb[gdj]; e++) {
                b = gdWb[e];
                if (gde[gd][gdLa][gdq](c, b)) 
                    a[b] = c[b]
            }
        }
    }, gdYb = function(){
        var a = arguments[gdj];
        if (a == 1 && gdhb(arguments[0])) 
            return gdYb[gd1a](null, arguments[0]);
        if (a % 2) 
            throw Error("Uneven number of arguments");
        var b = {};
        for (var c = 0; c < a; c += 2) 
            b[arguments[c]] = arguments[c + 1];
        return b
    }, gdZb = function(){
        var a = arguments[gdj];
        if (a == 1 && gdhb(arguments[0])) 
            return gdZb[gd1a](null, arguments[0]);
        var b = {};
        for (var c = 0; c < a; c++) 
            b[arguments[c]] = true;
        return b
    };
    var gd_b = function(a){
        if (typeof a.$a == "function") 
            return a.$a();
        if (gdib(a) || gdjb(a)) 
            return a[gdj];
        return gdSb(a)
    }, gd0b = function(a){
        if (typeof a.pa == "function") 
            return a.pa();
        if (gdjb(a)) 
            return a[gdIa]("");
        if (gdib(a)) {
            var b = [], c = a[gdj];
            for (var d = 0; d < c; d++) 
                b[gdi](a[d]);
            return b
        }
        return gdTb(a)
    }, gd1b = function(a){
        if (typeof a.lb == "function") 
            return a.lb();
        if (typeof a.pa == "function") 
            return gda;
        if (gdib(a) || gdjb(a)) {
            var b = [], c = a[gdj];
            for (var d = 0; d < c; d++) 
                b[gdi](d);
            return b
        }
        return gdUb(a)
    }, gd2b = function(a, b){
        if (typeof a[gd0a] ==
        "function") 
            return a[gd0a](b);
        if (typeof a.Vd == "function") 
            return a.Vd(b);
        if (gdib(a) || gdjb(a)) 
            return gdLb(a, b);
        return gdVb(a, b)
    }, gd3b = function(a, b, c){
        if (typeof a[gdYa] == "function") 
            a[gdYa](b, c);
        else 
            if (gdib(a) || gdjb(a)) 
                gdJb(a, b, c);
            else {
                var d = gd1b(a), e = gd0b(a), g = e[gdj];
                for (var h = 0; h < g; h++) 
                    b[gdq](c, e[h], d && d[h], a)
            }
    }, gd4b = null, gd5b = null, gd6b = function(a, b, c){
        if (typeof a[gd_a] == "function") 
            return a[gd_a](b, c);
        if (gdib(a) || gdjb(a)) 
            return gdKb(a, b, c);
        var d = gd1b(a), e = gd0b(a), g = e[gdj];
        for (var h = 0; h < g; h++) 
            if (!b[gdq](c, e[h], d && d[h], a)) 
                return false;
        return true
    };
    var gd7b = function(a){
        this.R = {};
        this.r = [];
        var b = arguments[gdj];
        if (b > 1) {
            if (b % 2) 
                throw Error("Uneven number of arguments");
            for (var c = 0; c < b; c += 2) 
                this.Qa(arguments[c], arguments[c + 1])
        }
        else 
            a && this.Td(a)
    };
    gd7b[gd].C = 0;
    gd7b[gd].Nd = 0;
    gd7b[gd].$a = function(){
        return this.C
    };
    gd7b[gd].pa = function(){
        this.Ud();
        var a = [];
        for (var b = 0; b < this.r[gdj]; b++) {
            var c = this.r[b];
            a[gdi](this.R[c])
        }
        return a
    };
    gd7b[gd].lb = function(){
        this.Ud();
        return this.r.concat()
    };
    gd7b[gd].Za = function(a){
        return gd8b(this.R, a)
    };
    gd7b[gd].Vd = function(a){
        for (var b = 0; b < this.r[gdj]; b++) {
            var c = this.r[b];
            if (gd8b(this.R, c) && this.R[c] == a) 
                return true
        }
        return false
    };
    gd7b[gd].clear = function(){
        this.R = {};
        gdha(this.r, 0);
        this.C = 0;
        this.Nd = 0
    };
    gd7b[gd].remove = function(a){
        if (gd8b(this.R, a)) {
            delete this.R[a];
            this.C--;
            this.Nd++;
            this.r[gdj] > 2 * this.C && this.Ud();
            return true
        }
        return false
    };
    gd7b[gd].Ud = function(){
        if (this.C != this.r[gdj]) {
            var a = 0, b = 0;
            while (a < this.r[gdj]) {
                var c = this.r[a];
                if (gd8b(this.R, c)) 
                    this.r[b++] = c;
                a++
            }
            gdha(this.r, b)
        }
        if (this.C != this.r[gdj]) {
            var d = {}, a = 0, b = 0;
            while (a <
            this.r[gdj]) {
                var c = this.r[a];
                if (!gd8b(d, c)) {
                    this.r[b++] = c;
                    d[c] = 1
                }
                a++
            }
            gdha(this.r, b)
        }
    };
    gd7b[gd].wa = function(a, b){
        if (gd8b(this.R, a)) 
            return this.R[a];
        return b
    };
    gd7b[gd].Qa = function(a, b){
        if (!gd8b(this.R, a)) {
            this.C++;
            this.r[gdi](a);
            this.Nd++
        }
        this.R[a] = b
    };
    gd7b[gd].Td = function(a){
        var b, c;
        if (a instanceof gd7b) {
            b = a.lb();
            c = a.pa()
        }
        else {
            b = gdUb(a);
            c = gdTb(a)
        }
        for (var d = 0; d < b[gdj]; d++) 
            this.Qa(b[d], c[d])
    };
    gd7b[gd].ba = function(){
        return new gd7b(this)
    };
    gd7b[gd].__iterator__ = function(a){
        this.Ud();
        var b = 0, c = this.r, d = this.R, e = this.Nd, g = this, h = new gdQb;
        h.il = function(){
            while (true) {
                if (e != g.Nd) 
                    throw Error("The map has changed since the iterator was created");
                if (b >= c[gdj]) 
                    throw gdPb;
                var i = c[b++];
                return a ? i : d[i]
            }
        };
        return h
    };
    if (gde[gd][gdLa]) 
        var gd8b = function(a, b){
            return gde[gd][gdLa][gdq](a, b)
        };
    else 
        gd8b = function(a, b){
            return b in a && a[b] !== gde[gd][b]
        };
    var gd9b = function(a, b, c){
        if (typeof a.Qa == "function") 
            a.Qa(b, c);
        else 
            a[b] = c
    };
    gd4b = gd9b;
    var gd$b = function(a){
        this.R = new gd7b;
        a && this.Td(a)
    }, gdac = function(a){
        var b = typeof a;
        return b == "object" ? "o" + gdob(a) : b.substr(0, 1) + a
    };
    gd$b[gd].$a = function(){
        return this.R.$a()
    };
    gd$b[gd].add = function(a){
        this.R.Qa(gdac(a), a)
    };
    gd$b[gd].Td = function(a){
        var b = gd0b(a), c = b[gdj];
        for (var d = 0; d < c; d++) 
            this.add(b[d])
    };
    gd$b[gd].ef = function(a){
        var b = gd0b(a), c = b[gdj];
        for (var d = 0; d < c; d++) 
            this[gdTa](b[d])
    };
    gd$b[gd].remove = function(a){
        return this.R[gdTa](gdac(a))
    };
    gd$b[gd].clear = function(){
        this.R.clear()
    };
    gd$b[gd].contains = function(a){
        return this.R.Za(gdac(a))
    };
    gd$b[gd].pa = function(){
        return this.R.pa()
    };
    gd$b[gd].ba = function(){
        return new gd$b(this)
    };
    gd$b[gd].Wd = function(a){
        return this.$a() != gd_b(a) ? false : this.cl(a)
    };
    gd$b[gd].cl = function(a){
        var b = gd_b(a);
        if (this.$a() > b) 
            return false;
        if (!(a instanceof gd$b) && b > 5) 
            a = new gd$b(a);
        return gd6b(this, function(c){
            return gd2b(a, c)
        })
    };
    gd$b[gd].__iterator__ = function(){
        return this.R.__iterator__(false)
    };
    var gdbc = function(a, b){
        if (typeof a.add == "function") 
            a.add(b);
        else 
            if (gdib(a)) 
                a[a[gdj]] = b;
            else 
                throw Error('The collection does not know how to add "' + b + '"');
    };
    gd5b = gdbc;
    var gdcc = function(a){
        var b = [];
        for (var c = 0; c < a[gdj]; c++) 
            gdhb(a[c]) ? b[gdi](gdcc(a[c])) : b[gdi](a[c]);
        return "[ " + b[gd$a](", ") + " ]"
    }, gdfc = function(a, b){
        try {
            var c = gddc(a), d = "Message: " + gdEb(c.message) + '\nUrl: <a href="view-source:' + c[gd6a] + '" target="_new">' + c[gd6a] + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + gdEb(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + gdEb(gdec(b) + "-> ");
            return d
        } 
        catch (e) {
            return "Exception trying to expose exception! You win, we lose. " + e
        }
    }, gddc = function(a){
        var b = gdeb("document.location.href");
        return typeof a == "string" ? {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        } : !a.lineNumber || !a[gd6a] || !a.stack ? {
            message: a.message,
            name: a[gd4a],
            lineNumber: a.lineNumber || a.line || "Not available",
            fileName: a[gd6a] || a.sourceURL || b,
            stack: a.stack || "Not available"
        } : a
    }, gdec = function(a){
        return gdgc(a || arguments.callee.caller, [])
    }, gdgc = function(a, b){
        var c = [];
        if (gdLb(b, a)) 
            c[gdi]("[...circular reference...]");
        else 
            if (a && b[gdj] < 50) {
                c[gdi](gdhc(a) + "(");
                var d = a.arguments;
                for (var e = 0; e < d[gdj]; e++) {
                    e > 0 && c[gdi](", ");
                    var g, h = d[e];
                    switch (typeof h) {
                        case "object":
                            g = h ? "object" : "null";
                            break;
                        case "string":
                            g = h;
                            break;
                        case "number":
                            g = gdb(h);
                            break;
                        case "boolean":
                            g = h ? "true" : "false";
                            break;
                        case "function":
                            g = gdhc(h);
                            g = g ? g : "[fn]";
                            break;
                        case "undefined":
                        default:
                            g = typeof h;
                            break
                    }
                    if (g[gdj] > 40) 
                        g = g.substr(0, 40) + "...";
                    c[gdi](g)
                }
                b[gdi](a);
                c[gdi](")\n");
                try {
                    c[gdi](gdgc(a.caller, b))
                } 
                catch (i) {
                    c[gdi]("[exception trying to get caller]\n")
                }
            }
            else 
                a ? c[gdi]("[...long stack...]") : c[gdi]("[end]");
        return c[gd$a]("")
    }, gdhc = function(a){
        var b = gdb(a);
        if (!gdic[b]) {
            var c = /function ([^\(]+)/[gdCa](b);
            if (c) {
                var d = c[1];
                gdic[b] = d
            }
            else 
                gdic[b] = "[Anonymous]"
        }
        return gdic[b]
    }, gdjc = function(a, b, c, d){
        if (gdeb("document.all")) 
            return "";
        var e = b || gdcb, g = c || "", h = d || 0;
        if (e == a) 
            return g;
        for (var i in e) {
            if (i == "Packages" || i == "sun" || i == "netscape" || i == "java") 
                continue;
            if (e[i] == a) 
                return g + i;
            if ((typeof e[i] == "function" || typeof e[i] == "object") && e[i] != gdcb && e[i] != gdeb("document") && e[gdLa](i) && h < 6) {
                var j = gdjc(a, e[i], g + i + ".", h + 1);
                if (j) 
                    return j
            }
        }
        return ""
    }, gdic = {};
    var gdlc = function(a, b, c){
        this.$l = gdkc++;
        this.am = gdrb();
        this.ec = a;
        this.Zl = b;
        this.Yl = c
    };
    gdlc[gd].Ik = null;
    gdlc[gd].Hk = null;
    var gdkc = 0;
    gdlc[gd].wl = function(a){
        this.Ik = a
    };
    gdlc[gd].xl = function(a){
        this.Hk = a
    };
    gdlc[gd].Se = function(){
        return this.ec
    };
    gdlc[gd].Mf = function(a){
        this.ec = a
    };
    var gdmc = function(a){
        this.hl = a;
        this.df = null;
        this.Ll = {};
        this.Vk = []
    };
    gdmc[gd].ec = null;
    var gdnc = function(a, b){
        gdta(this, a);
        gdg(this, b)
    };
    gdga(gdnc[gd], function(){
        return this[gd4a]
    });
    new gdnc("OFF", Infinity);
    new gdnc("SHOUT", 1200);
    new gdnc("SEVERE", 1000);
    new gdnc("WARNING", 900);
    new gdnc("INFO", 800);
    var gdoc = new gdnc("CONFIG", 700), gdpc = new gdnc("FINE", 500);
    new gdnc("FINER", 400);
    new gdnc("FINEST", 300);
    new gdnc("ALL", 0);
    gdmc[gd].$ = function(){
        return this.hl
    };
    gdmc[gd].Qk = function(){
        return this.df
    };
    gdmc[gd].Mf = function(a){
        this.ec = a
    };
    gdmc[gd].Se = function(){
        return this.ec
    };
    gdmc[gd].Ye = function(a){
        if (this.ec) 
            return a[gdm] >= this.ec[gdm];
        if (this.df) 
            return this.df.Ye(a);
        return false
    };
    gdmc[gd].log = function(a, b, c){
        if (!this.Ye(a)) 
            return;
        var d = new gdlc(a, gdb(b), this.hl);
        if (c) {
            d.wl(c);
            d.xl(gdfc(c, arguments.callee.caller))
        }
        this.dl(d)
    };
    gdmc[gd].dl = function(a){
        if (!this.Ye(a.Se())) 
            return;
        var b = this;
        while (b) {
            b.zk(a);
            b = b.Qk()
        }
    };
    gdmc[gd].zk = function(a){
        for (var b = 0; b < this.Vk[gdj]; b++) 
            this.Vk[b](a)
    };
    gdmc[gd].yl = function(a){
        this.df = a
    };
    gdmc[gd].xk = function(a, b){
        this.Ll[a] = b
    };
    var gdqc = {}, gdrc = null, gdsc = function(){
        if (!gdrc) {
            gdrc = new gdmc("");
            gdqc[""] = gdrc;
            gdrc.Mf(gdoc)
        }
    }, gduc = function(a){
        gdsc();
        return a in gdqc ? gdqc[a] : gdtc(a)
    }, gdtc = function(a){
        var b = new gdmc(a), c = a[gdIa]("."), d = c[c[gdj] - 1];
        gdha(c, c[gdj] - 1);
        var e = c[gd$a]("."), g = gduc(e);
        g.xk(d, b);
        b.yl(g);
        gdqc[a] = b;
        return b
    };
    var gdvc = function(a, b){
        this.x = gdu(a) ? gdd(a) : gda;
        this.y = gdu(b) ? gdd(b) : gda
    };
    gdvc[gd].ba = function(){
        return new gdvc(this.x, this.y)
    };
    gdga(gdvc[gd], function(){
        return "(" + this.x + ", " + this.y + ")"
    });
    var gdwc = function(a, b){
        gdja(this, a);
        gdva(this, b)
    };
    gdwc[gd].ba = function(){
        return new gdwc(this[gdDa], this[gd8a])
    };
    gdga(gdwc[gd], function(){
        return "(" + this[gdDa] + " x " + this[gd8a] + ")"
    });
    gdwc[gd].ceil = function(){
        gdja(this, gdfa.ceil(this[gdDa]));
        gdva(this, gdfa.ceil(this[gd8a]));
        return this
    };
    gdwc[gd].floor = function(){
        gdja(this, gdfa[gdJa](this[gdDa]));
        gdva(this, gdfa[gdJa](this[gd8a]));
        return this
    };
    gdwc[gd].round = function(){
        gdja(this, gdfa.round(this[gdDa]));
        gdva(this, gdfa.round(this[gd8a]));
        return this
    };
    gdwc[gd].scale = function(a){
        this.width *= a;
        this.height *= a;
        return this
    };
    var gdxc, gdyc, gdzc, gdAc, gdBc, gdCc, gdDc, gdEc, gdFc, gdGc, gdHc, gdIc = function(){
        var a = false, b = false, c = false, d = false, e = false, g = false, h = false, i = false, j = false, l = "";
        if (gdcb.navigator) {
            var k = gdcb.navigator, m = k.userAgent;
            a = m[gdo]("Opera") == 0;
            b = !a && m[gdo]("MSIE") != -1;
            c = !a && m[gdo]("WebKit") != -1;
            j = c && m[gdo]("Mobile") != -1;
            d = !a && !c && k.product == "Gecko";
            e = d && k.vendor == "Camino";
            var n, o;
            if (a) 
                n = gdcb.opera[gdAa]();
            else {
                if (d) 
                    o = /rv\:([^\);]+)(\)|;)/;
                else 
                    if (b) 
                        o = /MSIE\s+([^\);]+)(\)|;)/;
                    else 
                        if (c) 
                            o = /WebKit\/(\S+)/;
                if (o) {
                    o[gdBa](m);
                    n = RegExp.$1
                }
            }
            l = k.platform || "";
            g = l[gdo]("Mac") != -1;
            h = l[gdo]("Win") != -1;
            i = l[gdo]("Linux") != -1
        }
        gdxc = a;
        gdyc = b;
        gdzc = d;
        gdAc = e;
        gdBc = c;
        gdCc = j;
        gdDc = n;
        gdEc = l;
        gdFc = g;
        gdGc = h;
        gdHc = i
    };
    gdIc();
    var gdJc = gdxc, gdKc = gdyc, gdLc = gdzc, gdMc = gdBc;
    var gdNc = function(a, b){
        a[gdwa](b)
    }, gdOc = function(a){
        return a && a[gd5a] ? a[gd5a].removeChild(a) : null
    };
    var gdPc = gdMc && gdHb(gdDc, "521") <= 0, gdQc = function(a, b){
        if (typeof a[gd0a] != "undefined" && !gdPc && b[gdGa] == 1) 
            return a == b || a[gd0a](b);
        if (typeof a.compareDocumentPosition != "undefined") 
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        while (b && a != b) 
            b = b[gd5a];
        return b == a
    };
    var gdRc = function(a){
        var b;
        b = gdMc ? a[gdHa] || a.contentWindow[gdHa] : a.contentDocument || a.contentWindow[gdHa];
        return b
    }, gdSc = function(a, b, c, d){
        if (a != null) 
            for (var e = 0, g; g = a[gd2a][e]; e++) {
                if (b(g)) {
                    c[gdi](g);
                    if (d) 
                        return
                }
                gdSc(g, b, c, d)
            }
    }, gdTc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }, gdUc = {
        IMG: " ",
        BR: "\n"
    }, gdVc = function(a, b, c){
        if (!(a[gdOa] in gdTc)) 
            if (a[gdGa] == 3) 
                c ? b[gdi](gdb(a[gdab])[gdk](/(\r\n|\r|\n)/g, "")) : b[gdi](a[gdab]);
            else 
                if (a[gdOa] in gdUc) 
                    b[gdi](gdUc[a[gdOa]]);
                else {
                    var d = a.firstChild;
                    while (d) {
                        gdVc(d, b, c);
                        d = d.nextSibling
                    }
                }
    }, gdWc = function(a){
        this.Fk = a || gdcb[gdHa] || gdf
    };
    gdWc[gd].createElement = function(a){
        return this.Fk[gdVa](a)
    };
    gdWc[gd].createTextNode = function(a){
        return this.Fk.createTextNode(a)
    };
    gdWc[gd].appendChild = gdNc;
    gdWc[gd].removeNode = gdOc;
    gdWc[gd].contains = gdQc;
    var gdXc = function(){
    };
    gdXc[gd].Vg = false;
    gdXc[gd].va = function(){
        if (!this.Vg) {
            this.k();
            this.Vg = true
        }
    };
    gdXc[gd].k = function(){
    };
    var gdYc = function(a, b){
        gdXc[gdq](this);
        this.gl = b;
        this.vc = [];
        this.Bk(a)
    };
    gdsb(gdYc, gdXc);
    gdYc[gd].Oe = null;
    gdYc[gd].Pe = null;
    gdYc[gd].Ld = function(a){
        this.Oe = a
    };
    gdYc[gd].Lj = function(a){
        this.Pe = a
    };
    gdYc[gd].ab = function(){
        if (this.vc[gdj]) 
            return this.vc.pop();
        return this.Qg()
    };
    gdYc[gd].fc = function(a){
        this.vc[gdj] < this.gl ? this.vc[gdi](a) : this.Ug(a)
    };
    gdYc[gd].Bk = function(a){
        if (a > this.gl) 
            throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
        for (var b = 0; b < a; b++) 
            this.vc[gdi](this.Qg())
    };
    gdYc[gd].Qg = function(){
        return this.Oe ? this.Oe() : {}
    };
    gdYc[gd].Ug = function(a){
        if (this.Pe) 
            this.Pe(a);
        else 
            if (gdkb(a.va)) 
                a.va();
            else 
                for (var b in a) 
                    delete a[b]
    };
    gdYc[gd].k = function(){
        gdYc.Wa.k[gdq](this);
        var a = this.vc;
        while (a[gdj]) 
            this.Ug(a.pop());
        delete this.vc
    };
    var gdZc = function(a, b){
        gdh(this, a);
        gdoa(this, b);
        gdma(this, this[gdp])
    };
    gdsb(gdZc, gdXc);
    gdZc[gd].k = function(){
        delete this[gdt];
        delete this[gdp];
        delete this.currentTarget
    };
    gdZc[gd].qb = false;
    gdZc[gd].rd = true;
    gdZc[gd].stopPropagation = function(){
        this.qb = true
    };
    gdZc[gd].preventDefault = function(){
        this.rd = false
    };
    var gdw = function(a, b){
        a && this.ob(a, b)
    };
    gdsb(gdw, gdZc);
    gdh(gdw[gd], null);
    gdoa(gdw[gd], null);
    gdma(gdw[gd], null);
    gdw[gd].relatedTarget = null;
    gdw[gd].offsetX = 0;
    gdw[gd].offsetY = 0;
    gdw[gd].clientX = 0;
    gdw[gd].clientY = 0;
    gdw[gd].screenX = 0;
    gdw[gd].screenY = 0;
    gdw[gd].button = 0;
    gdqa(gdw[gd], 0);
    gdw[gd].charCode = 0;
    gdw[gd].ctrlKey = false;
    gdw[gd].altKey = false;
    gdw[gd].shiftKey = false;
    gdw[gd].metaKey = false;
    gdw[gd].Ea = null;
    gdw[gd].ob = function(a, b){
        gdh(this, a[gdt]);
        gdoa(this, a[gdp] || a.srcElement);
        gdma(this, b);
        this.relatedTarget = a.relatedTarget ? a.relatedTarget : this[gdt] == "mouseover" ? a.fromElement : this[gdt] == "mouseout" ? a.toElement : null;
        this.offsetX = typeof a.layerX == "number" ? a.layerX : a.offsetX;
        this.offsetY = typeof a.layerY == "number" ? a.layerY : a.offsetY;
        this.clientX = typeof a.clientX == "number" ? a.clientX : a.pageX;
        this.clientY = typeof a.clientY == "number" ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        gdqa(this, a[gdXa] || 0);
        this.charCode = a[gdSa] || (this[gdt] == gd_c ? a[gdXa] : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Ea = a;
        delete this.rd;
        delete this.qb
    };
    gdw[gd].stopPropagation = function(){
        this.qb = true;
        if (this.Ea.stopPropagation) 
            this.Ea.stopPropagation();
        else 
            this.Ea.cancelBubble = true
    };
    gdw[gd].preventDefault = function(){
        this.rd = false;
        if (this.Ea.preventDefault) 
            this.Ea.preventDefault();
        else {
            this.Ea.returnValue = false;
            try {
                gdqa(this.Ea, -1)
            } 
            catch (a) {
            }
        }
    };
    gdw[gd].Zd = function(){
        return this.Ea
    };
    gdw[gd].k = function(){
        gdw.Wa.k[gdq](this);
        this.Ea = null
    };
    var gd0c = function(){
    }, gd1c = 0;
    gd0c[gd].Xe = null;
    gd0c[gd].od = null;
    gd0c[gd].Dj = null;
    gd0c[gd].src = null;
    gdh(gd0c[gd], null);
    gd0c[gd].Bd = null;
    gd0c[gd].ie = null;
    gd0c[gd].bb = 0;
    gd0c[gd].qd = false;
    gd0c[gd].Le = false;
    gd0c[gd].ob = function(a, b, c, d, e, g){
        if (gdkb(a)) 
            this.Xe = true;
        else 
            if (a && a[gdZa] && gdkb(a[gdZa])) 
                this.Xe = false;
            else 
                throw Error("Invalid listener argument");
        this.od = a;
        this.Dj = b;
        this.src = c;
        gdh(this, d);
        this.Bd = !!e;
        this.ie = g;
        this.Le = false;
        this.bb = ++gd1c;
        this.qd = false
    };
    gdsa(gd0c[gd], function(a){
        if (this.Xe) 
            return this.od[gdq](this.ie ||
            this.src, a);
        return this.od[gdZa][gdq](this.od, a)
    });
    var gd2c = {}, gd3c = {}, gd4c = {}, gd5c = new gdYc(0, 600);
    gd5c.Ld(function(){
        return {
            C: 0
        }
    });
    gd5c.Lj(function(a){
        a.C = 0
    });
    var gd6c = new gdYc(0, 600);
    gd6c.Ld(function(){
        return []
    });
    gd6c.Lj(function(a){
        gdha(a, 0);
        delete a.ne;
        delete a.zj
    });
    var gd7c = new gdYc(0, 600);
    gd7c.Ld(function(){
        var a = function(b){
            return gd8c[gdq](a.src, a.bb, b)
        };
        return a
    });
    var gd9c = function(){
        return new gd0c
    }, gd$c = new gdYc(0, 600);
    gd$c.Ld(gd9c);
    var gdad = function(){
        return new gdw
    }, gdbd = function(){
        var a = null;
        if (gdKc) {
            a = new gdYc(0, 600);
            a.Ld(gdad)
        }
        return a
    }, gdcd = gdbd(), gddd = "on", gded = {}, gdfd = function(a, b, c, d, e){
        if (b) 
            if (gdhb(b)) {
                for (var g = 0; g < b[gdj]; g++) 
                    gdfd(a, b[g], c, d, e);
                return null
            }
            else {
                var h = !!d, i = gd3c;
                b in i || (i[b] = gd5c.ab());
                i = i[b];
                if (!(h in i)) {
                    i[h] = gd5c.ab();
                    i.C++
                }
                i = i[h];
                var j = gdob(a), l, k;
                if (i[j]) {
                    l = i[j];
                    for (var g = 0; g < l[gdj]; g++) {
                        k = l[g];
                        if (k.od == c && k.ie == e) {
                            if (k.qd) 
                                break;
                            return l[g].bb
                        }
                    }
                }
                else {
                    l = i[j] = gd6c.ab();
                    i.C++
                }
                var m = gd7c.ab();
                m.src = a;
                k = gd$c.ab();
                k.ob(c, m, a, b, h, e);
                var n = k.bb;
                m.bb = n;
                l[gdi](k);
                gd2c[n] = k;
                gd4c[j] || (gd4c[j] = gd6c.ab());
                gd4c[j][gdi](k);
                if (a.addEventListener) {
                    if (a == gdcb || !a.Rg) 
                        a.addEventListener(b, m, h)
                }
                else 
                    a.attachEvent(gdgd(b), m);
                return n
            }
        else 
            throw Error("Invalid event type");
    }, gdhd = function(a, b, c, d, e){
        if (gdhb(b)) {
            for (var g = 0; g < b[gdj]; g++) 
                gdhd(a, b[g], c, d, e);
            return null
        }
        var h = gdfd(a, b, c, d, e), i = gd2c[h];
        i.Le = true;
        return h
    }, gdid = function(a, b, c, d, e){
        if (gdhb(b)) {
            for (var g = 0; g < b[gdj]; g++) 
                gdid(a, b[g], c, d, e);
            return null
        }
        var h = !!d, i = gdjd(a, b, h);
        if (!i) 
            return false;
        for (var g = 0; g < i[gdj]; g++) 
            if (i[g].od == c && i[g].Bd == h && i[g].ie == e) 
                return gdkd(i[g].bb);
        return false
    }, gdkd = function(a){
        if (!gd2c[a]) 
            return false;
        var b = gd2c[a];
        if (b.qd) 
            return false;
        var c = b.src, d = b[gdt], e = b.Dj, g = b.Bd;
        if (c.removeEventListener) {
            if (c == gdcb || !c.Rg) 
                c.removeEventListener(d, e, g)
        }
        else 
            c.detachEvent && c.detachEvent(gdgd(d), e);
        var h = gdob(c), i = gd3c[d][g][h];
        if (gd4c[h]) {
            var j = gd4c[h];
            gdMb(j, b);
            j[gdj] == 0 && delete gd4c[h]
        }
        b.qd = true;
        i.zj = true;
        gdld(d, g, h, i);
        delete gd2c[a];
        return true
    }, gdld = function(a, b, c, d){
        if (!d.ne) 
            if (d.zj) {
                for (var e = 0, g = 0; e < d[gdj]; e++) {
                    if (d[e].qd) {
                        gd$c.fc(d[e]);
                        continue
                    }
                    if (e !=
                    g) 
                        d[g] = d[e];
                    g++
                }
                gdha(d, g);
                d.zj = false;
                if (g == 0) {
                    gd6c.fc(d);
                    delete gd3c[a][b][c];
                    gd3c[a][b].C--;
                    if (gd3c[a][b].C == 0) {
                        gd5c.fc(gd3c[a][b]);
                        delete gd3c[a][b];
                        gd3c[a].C--
                    }
                    if (gd3c[a].C == 0) {
                        gd5c.fc(gd3c[a]);
                        delete gd3c[a]
                    }
                }
            }
    }, gdmd = function(a, b, c){
        var d = 0, e = a == null, g = b == null, h = c == null;
        c = !!c;
        if (e) 
            gdRb(gd4c, function(m){
                for (var n = m[gdj] - 1; n >= 0; n--) {
                    var o = m[n];
                    if ((g || b == o[gdt]) && (h || c == o.Bd)) {
                        gdkd(o.bb);
                        d++
                    }
                }
            });
        else {
            var i = gdob(a);
            if (gd4c[i]) {
                var j = gd4c[i];
                for (var l = j[gdj] - 1; l >= 0; l--) {
                    var k = j[l];
                    if ((g || b == k[gdt]) &&
                    (h || c == k.Bd)) {
                        gdkd(k.bb);
                        d++
                    }
                }
            }
        }
        return d
    }, gdjd = function(a, b, c){
        var d = gd3c;
        if (b in d) {
            d = d[b];
            if (c in d) {
                d = d[c];
                var e = gdob(a);
                if (d[e]) 
                    return d[e]
            }
        }
        return null
    }, gd_c = "keypress", gdgd = function(a){
        if (a in gded) 
            return gded[a];
        return gded[a] = gddd + a
    }, gdod = function(a, b, c, d){
        var e = 1, g = gd3c;
        if (b in g) {
            g = g[b];
            if (c in g) {
                g = g[c];
                var h = gdob(a);
                if (g[h]) {
                    var i = g[h];
                    if (i.ne) 
                        i.ne++;
                    else 
                        i.ne = 1;
                    try {
                        var j = i[gdj];
                        for (var l = 0; l < j; l++) {
                            var k = i[l];
                            if (k && !k.qd) 
                                e &= gdnd(k, d) !== false
                        }
                    }
                    finally {
                        i.ne--;
                        gdld(b, c, h, i)
                    }
                }
            }
        }
        return Boolean(e)
    }, gdnd = function(a, b){
        var c = a[gdZa](b);
        a.Le && gdkd(a.bb);
        return c
    }, gdpd = function(a, b){
        if (gdjb(b)) 
            b = new gdZc(b, a);
        else 
            if (b instanceof gdZc) 
                gdoa(b, b[gdp] || a);
            else {
                var c = b;
                b = new gdZc(b[gdt], a);
                gdXb(b, c)
            }
        var d = 1, e, g = b[gdt], h = gd3c;
        if (!(g in h)) 
            return true;
        h = h[g];
        var i = true in h, j = false in h;
        if (i) {
            e = [];
            for (var l = a; l; l = l.ni()) 
                e[gdi](l);
            for (var k = e[gdj] - 1; !b.qb && k >= 0; k--) {
                gdma(b, e[k]);
                d &= gdod(e[k], b[gdt], true, b) && b.rd != false
            }
        }
        if (j) 
            if (i) 
                for (var k = 0; !b.qb && k < e[gdj]; k++) {
                    gdma(b, e[k]);
                    d &= gdod(e[k], b[gdt], false, b) &&
                    b.rd != false
                }
            else 
                for (var m = a; !b.qb && m; m = m.ni()) {
                    gdma(b, m);
                    d &= gdod(m, b[gdt], false, b) && b.rd != false
                }
        return Boolean(d)
    }, gd8c = function(a, b){
        if (!gd2c[a]) 
            return true;
        var c = gd2c[a], d = c[gdt], e = gd3c;
        if (!(d in e)) 
            return true;
        e = e[d];
        var g;
        if (gdKc) {
            var h = b || gdeb("window.event"), i = true in e;
            if (i) {
                if (h[gdXa] < 0 || h.returnValue != gda) 
                    return true;
                gdqd(h)
            }
            gdob(c.src);
            var j = gdcd.ab();
            j.ob(h, this);
            g = true;
            try {
                if (i) {
                    var l = gd6c.ab();
                    for (var k = j.currentTarget; k; k = k[gd5a]) 
                        l[gdi](k);
                    for (var m = l[gdj] - 1; !j.qb && m >= 0; m--) {
                        gdma(j, l[m]);
                        g &= gdod(l[m], d, true, j)
                    }
                    for (var m = 0; !j.qb && m < l[gdj]; m++) {
                        gdma(j, l[m]);
                        g &= gdod(l[m], d, false, j)
                    }
                }
                else 
                    g = gdnd(c, j)
            }
            finally {
                if (l) {
                    gdha(l, 0);
                    gd6c.fc(l)
                }
                j.va();
                gdcd.fc(j)
            }
            return g
        }
        var n = new gdw(b, this);
        try {
            g = gdnd(c, n)
        }
        finally {
            n.va()
        }
        return g
    }, gdqd = function(a){
        var b = false;
        if (a[gdXa] == 0) 
            try {
                gdqa(a, -1);
                return
            } 
            catch (c) {
                b = true
            }
        if (b || a.returnValue == gda) 
            a.returnValue = true
    };
    var gdx = function(){
    };
    gdsb(gdx, gdXc);
    gdx[gd].Rg = true;
    gdx[gd].Cj = null;
    gdx[gd].ni = function(){
        return this.Cj
    };
    gdx[gd].addEventListener = function(a, b, c, d){
        gdfd(this, a, b, c, d)
    };
    gdx[gd].removeEventListener = function(a, b, c, d){
        gdid(this, a, b, c, d)
    };
    gdx[gd].dispatchEvent = function(a){
        return gdpd(this, a)
    };
    gdx[gd].k = function(){
        gdx.Wa.k[gdq](this);
        gdmd(this);
        this.Cj = null
    };
    var gdrd = function(a){
        if (/^\s*$/[gdBa](a)) 
            return false;
        var b = /\\["\\\/bfnrtu]/g, c = /"[^"\\\n\r\u2028\u2029\x00-\x1f\x7f-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, d = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, e = /^[\],:{}\s\u2028\u2029]*$/;
        return e[gdBa](a[gdk](b, "@")[gdk](c, "]")[gdk](d, ""))
    }, gdsd = function(a){
        var b = gdb(a);
        if (typeof b.parseJSON == "function") 
            return b.parseJSON();
        if (gdrd(a)) 
            try {
                return eval("(" + a + ")")
            } 
            catch (c) {
            }
        throw Error("Invalid JSON string: " + a);
    };
    var gdy = function(a, b){
        var c;
        if (a instanceof gdy) {
            this.ic(b == null ? a.Nk() : b);
            this.jc(a.Ed());
            this.Ag(a.Sk());
            this.tf(a.Re());
            this.Zf(a.ee());
            this.Xf(a.Rc());
            this.eg(a.Bi().ba());
            this.Bf(a.Mk())
        }
        else 
            if (a && (c = gdb(a).match(gdtd()))) {
                this.ic(!!b);
                this.jc(c[1], true);
                this.Ag(c[2], true);
                this.tf(c[3], true);
                this.Zf(c[4]);
                this.Xf(c[5], true);
                this.eg(c[6]);
                this.Bf(c[7], true)
            }
            else {
                this.ic(!!b);
                this.rb = new gdz(null, this, this.Oa)
            }
    };
    gdy[gd].tb = "";
    gdy[gd].Md = "";
    gdy[gd].uc = "";
    gdy[gd].pd = null;
    gdy[gd].Kd = "";
    gdy[gd].Dd = "";
    gdy[gd].wj = false;
    gdy[gd].Oa = false;
    gdga(gdy[gd], function(){
        if (this.oa) 
            return this.oa;
        var a = [];
        this.tb && a[gdi](gdud(this.tb, gdvd), ":");
        if (this.uc) {
            a[gdi]("//");
            this.Md && a[gdi](gdud(this.Md, gdvd), "@");
            a[gdi](gdwd(this.uc));
            this.pd != null && a[gdi](":", gdb(this.ee()))
        }
        this.Kd && a[gdi](gdud(this.Kd, gdxd));
        var b = gdb(this.rb);
        b && a[gdi]("?", b);
        this.Dd && a[gdi]("#", gdud(this.Dd, gdyd));
        return this.oa = a[gd$a]("")
    });
    gdy[gd].ba = function(){
        return gdzd(this.tb, this.Md, this.uc, this.pd, this.Kd, this.rb.ba(), this.Dd, this.Oa)
    };
    gdy[gd].Ed = function(){
        return this.tb
    };
    gdy[gd].jc = function(a, b){
        this.$b();
        delete this.oa;
        this.tb = b ? a ? gdea(a) : "" : a;
        if (this.tb) 
            this.tb = this.tb[gdk](/:$/, "");
        return this
    };
    gdy[gd].Sk = function(){
        return this.Md
    };
    gdy[gd].Ag = function(a, b){
        this.$b();
        delete this.oa;
        this.Md = b ? a ? gdea(a) : "" : a;
        return this
    };
    gdy[gd].Re = function(){
        return this.uc
    };
    gdy[gd].tf = function(a, b){
        this.$b();
        delete this.oa;
        this.uc = b ? a ? gdea(a) : "" : a;
        return this
    };
    gdy[gd].tj = function(){
        return !!this.uc
    };
    gdy[gd].ee = function(){
        return this.pd
    };
    gdy[gd].Zf = function(a){
        this.$b();
        delete this.oa;
        if (a) {
            a = gdd(a);
            if (isNaN(a) || a < 0) 
                throw Error("Bad port number " + a);
            this.pd = a
        }
        else 
            this.pd = null;
        return this
    };
    gdy[gd].uj = function(){
        return this.pd != null
    };
    gdy[gd].Rc = function(){
        return this.Kd
    };
    gdy[gd].Xf = function(a, b){
        this.$b();
        delete this.oa;
        this.Kd = b ? a ? gdea(a) : "" : a;
        return this
    };
    gdy[gd].eg = function(a){
        this.$b();
        delete this.oa;
        if (a instanceof gdz) {
            this.rb = a;
            this.rb.pk = this;
            this.rb.ic(this.Oa)
        }
        else 
            this.rb = new gdz(a, this, this.Oa);
        return this
    };
    gdy[gd].Bi = function(){
        return this.rb
    };
    gdy[gd].Mk = function(){
        return this.Dd
    };
    gdy[gd].Bf = function(a, b){
        this.$b();
        delete this.oa;
        this.Dd = b ? a ? gdea(a) : "" : a;
        return this
    };
    gdy[gd].Xk = function(a){
        return (!this.tj() && !a.tj() || this.Re() == a.Re()) && (!this.uj() && !a.uj() || this.ee() == a.ee())
    };
    gdy[gd].Ua = function(a){
        this.wj = a
    };
    gdy[gd].$b = function(){
        if (this.wj) 
            throw Error("Tried to modify a read-only Uri");
    };
    gdy[gd].ic = function(a){
        this.Oa = a;
        this.rb && this.rb.ic(a)
    };
    gdy[gd].Nk = function(){
        return this.Oa
    };
    var gdAd = function(a, b){
        return a instanceof
        gdy ? a.ba() : new gdy(a, b)
    }, gdzd = function(a, b, c, d, e, g, h, i){
        var j = new gdy(null, i);
        a && j.jc(a);
        b && j.Ag(b);
        c && j.tf(c);
        d && j.Zf(d);
        e && j.Xf(e);
        g && j.eg(g);
        h && j.Bf(h);
        return j
    };
    var gdwd = function(a){
        if (gdjb(a)) 
            return gdba(a);
        return null
    }, gdBd = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/, gdud = function(a, b){
        var c = null;
        if (gdjb(a)) {
            c = a;
            gdBd[gdBa](c) || (c = encodeURI(a));
            if (c.search(b) >= 0) 
                c = c[gdk](b, gdCd)
        }
        return c
    }, gdCd = function(a){
        var b = a.charCodeAt(0);
        return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
    }, gdDd = null, gdtd = function(){
        gdDd ||
        (gdDd = /^(?:([^:\/?#]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/);
        return gdDd
    }, gdvd = /[#\/\?@]/g, gdxd = /[\#\?]/g, gdyd = /#/g, gdEd = function(a, b){
        var c = new gdy(a), d = new gdy(b);
        return c.Xk(d)
    }, gdz = function(a, b, c){
        this.V = new gd7b;
        this.pk = b || null;
        this.Oa = !!c;
        if (a) {
            var d = a[gdIa]("&");
            for (var e = 0; e < d[gdj]; e++) {
                var g = d[e][gdo]("="), h = null, i = null;
                if (g >= 0) {
                    h = d[e][gds](0, g);
                    i = d[e][gds](g + 1)
                }
                else 
                    h = d[e];
                h = gdyb(h);
                h = this.ac(h);
                this.add(h, i ? gdyb(i) : "")
            }
        }
    };
    gdz[gd].C = 0;
    gdz[gd].$a = function(){
        return this.C
    };
    gdz[gd].add = function(a, b){
        this.Hd();
        a = this.ac(a);
        if (this.Za(a)) {
            var c = this.V.wa(a);
            gdhb(c) ? c[gdi](b) : this.V.Qa(a, [c, b])
        }
        else 
            this.V.Qa(a, b);
        this.C++;
        return this
    };
    gdz[gd].remove = function(a){
        a = this.ac(a);
        if (this.V.Za(a)) {
            this.Hd();
            var b = this.V.wa(a);
            if (gdhb(b)) 
                this.C -= b[gdj];
            else 
                this.C--;
            return this.V[gdTa](a)
        }
        return false
    };
    gdz[gd].clear = function(){
        this.Hd();
        this.V.clear();
        this.C = 0
    };
    gdz[gd].Za = function(a){
        a = this.ac(a);
        return this.V.Za(a)
    };
    gdz[gd].Vd = function(a){
        var b = this.pa();
        return gdLb(b, a)
    };
    gdz[gd].lb = function(){
        var a = this.V.pa(), b = this.V.lb(), c = [];
        for (var d = 0; d < b[gdj]; d++) {
            var e = a[d];
            if (gdhb(e)) 
                for (var g = 0; g < e[gdj]; g++) 
                    c[gdi](b[d]);
            else 
                c[gdi](b[d])
        }
        return c
    };
    gdz[gd].pa = function(a){
        var b;
        if (a) {
            var c = this.ac(a);
            if (this.Za(c)) {
                var d = this.V.wa(c);
                if (gdhb(d)) 
                    return d;
                else {
                    b = [];
                    b[gdi](d)
                }
            }
            else 
                b = []
        }
        else {
            var e = this.V.pa();
            b = [];
            for (var g = 0; g < e[gdj]; g++) {
                var h = e[g];
                gdhb(h) ? gdNb(b, h) : b[gdi](h)
            }
        }
        return b
    };
    gdz[gd].Qa = function(a, b){
        this.Hd();
        a = this.ac(a);
        if (this.Za(a)) {
            var c = this.V.wa(a);
            if (gdhb(c)) 
                this.C -= c[gdj];
            else 
                this.C--
        }
        this.V.Qa(a, b);
        this.C++;
        return this
    };
    gdz[gd].wa = function(a, b){
        a = this.ac(a);
        if (this.Za(a)) {
            var c = this.V.wa(a);
            return gdhb(c) ? c[0] : c
        }
        else 
            return b
    };
    gdga(gdz[gd], function(){
        if (this.oa) 
            return this.oa;
        var a = [], b = 0, c = this.V.lb();
        for (var d = 0; d < c[gdj]; d++) {
            var e = c[d], g = gdxb(e), h = this.V.wa(e);
            if (gdhb(h)) 
                for (var i = 0; i < h[gdj]; i++) {
                    b > 0 && a[gdi]("&");
                    a[gdi](g, "=", gdxb(h[i]));
                    b++
                }
            else {
                b > 0 && a[gdi]("&");
                a[gdi](g, "=", gdxb(h));
                b++
            }
        }
        return this.oa = a[gd$a]("")
    });
    gdz[gd].Hd = function(){
        delete this.oa;
        this.pk && delete this.pk.oa
    };
    gdz[gd].ba = function(){
        var a = new gdz;
        a.V = this.V.ba();
        return a
    };
    gdz[gd].ac = function(a){
        var b = gdb(a);
        if (this.Oa) 
            b = b.toLowerCase();
        return b
    };
    gdz[gd].ic = function(a){
        var b = a && !this.Oa;
        if (b) {
            this.Hd();
            gd3b(this.V, function(c, d){
                var e = d.toLowerCase();
                if (d != e) {
                    this[gdTa](d);
                    this.add(e, c)
                }
            }, this)
        }
        this.Oa = a
    };
    gdz[gd].extend = function(){
        for (var a = 0; a < arguments[gdj]; a++) {
            var b = arguments[a];
            gd3b(b, function(c, d){
                this.add(d, c)
            }, this)
        }
    };
    var gdFd = function(){
        gdx[gdq](this)
    }, gdGd, gdHd;
    gdsb(gdFd, gdx);
    var gdId = true;
    if (gdc[gdn] && (gdc[gdn].hash[gdo]("xdrp") == 1 || gdc[gdn].search[gdo]("xdrp") == 1)) 
        if (gdKc) 
            gdf.execCommand("Stop");
        else 
            if (gdLc) 
                gdc[gdya]();
            else 
                throw Error("stopped");
    var gdJd = function(a, b, c, d, e){
        var g = new gdFd;
        b && gdfd(g, "complete", b);
        gdfd(g, "ready", g.reset);
        g.Pa(a, c, d, e)
    }, gdKd = function(a){
        gdHd = a
    }, gdLd = gduc("goog.net.CrossDomainRpc"), gdMd = function(a, b){
        return '<textarea name="' + a + '">' +
        (b && (gdjb(b) || b[gdl] == gdb) ? b[gdk](/&/g, "&amp;") : b) +
        "</textarea>"
    };
    var gdNd = function(){
        if (gdGd) 
            return gdGd;
        if (gdLc) {
            var a = gdf.getElementsByTagName("link");
            for (var b = 0; b < a[gdj]; b++) {
                var c = a[b];
                if (c.rel == "stylesheet" && gdEd(c[gdr], gdc[gdn][gdr]) && c[gdr][gdo]("?") < 0) 
                    return c[gdr][gdIa]("#")[0]
            }
        }
        var d = gdf.getElementsByTagName("img");
        for (var b = 0; b < d[gdj]; b++) {
            var e = d[b];
            if (gdEd(e.src, gdc[gdn][gdr]) && e.src[gdo]("?") < 0) 
                return e.src[gdIa]("#")[0]
        }
        if (!gdId) 
            throw Error("No suitable dummy resource specified or detected for this page");
        if (gdKc) 
            return gdc[gdn][gdr][gdIa]("#")[0];
        else {
            var g = gdc[gdn][gdr], h = g[gdo]("/", g[gdo]("//") + 2), i = g[gds](0, h);
            return i + "/robots.txt"
        }
    };
    var gdOd = 0;
    gdFd[gd].Pa = function(a, b, c, d){
        var e = this.oe = gdf[gdVa]("iframe"), g = gdOd++;
        e.id = "xdrq-" + g;
        if (!gdHd) {
            e[gdNa].position = "absolute";
            e[gdNa].top = "-5000px";
            e[gdNa].left = "-5000px"
        }
        gdf[gdPa][gdwa](e);
        var h = [];
        h[gdi](gdMd("xdpe:request-id", g));
        var i = gdNd();
        gdLd.log(gdpc, "dummyUri: " + i);
        h[gdi](gdMd("xdpe:dummy-uri", i));
        if (c) 
            for (var j in c) {
                var l = c[j];
                h[gdi](gdMd("xdp:" + j, l))
            }
        if (d) 
            for (var j in d) {
                var l = d[j];
                h[gdi](gdMd("xdh:" + j, l))
            }
        var k = '<body><form method="' + (b == "GET" ? "GET" : "POST") + '" action="' + a + '">' + h[gd$a]("") + "</form></body>", m = gdRc(e);
        m.open();
        m.write(k);
        m.close();
        m.forms[0].submit();
        m = null;
        this.Rl = gdfd(e, "load", function(){
            gdLd.log(gdpc, "response ready");
            this.Vl = true
        }, false, this);
        this.nl()
    };
    gdFd[gd].nl = function(){
        this.Bl = 0;
        var a = gdc.setInterval(gdqb(function(){
            this.Ck(a)
        }, this), 50)
    };
    gdFd[gd].Ck = function(a){
        var b = this.oe.contentWindow, c = b.frames[gdj], d = null;
        if (c > 0 && gdPd(d = b.frames[c - 1])) {
            gdLd.log(gdpc, "xd response ready");
            gdc.clearInterval(a);
            var e = gdQd(d)[gds](1), g = new gdz(e), h = [], i = gdd(g.wa("n"));
            gdLd.log(gdpc, "xd response number of chunks: " + i);
            for (var j = 0; j < i; j++) {
                var l = b.frames[j], k = gdQd(l), m = k[gdo]("chunk") + "chunk"[gdj] + 1, n = k[gds](m);
                h[gdi](n)
            }
            var o = h[gd$a]("");
            gdKc || (o = gdea(o));
            gdpa(this, gdd(g.wa("status")));
            gdka(this, o);
            this.sl = g.wa("isDataJson") == "true";
            this.responseHeaders = eval("(" + g.wa("headers") + ")");
            this[gdMa]("ready");
            this[gdMa]("complete")
        }
        else 
            if (this.Vl) {
                this.Bl += 50;
                if (this.Bl >
                500) {
                    gdLd.log(gdpc, "xd response timed out");
                    gdc.clearInterval(a);
                    gdpa(this, 500);
                    gdka(this, "response timed out");
                    this[gdMa]("ready");
                    this[gdMa]("error");
                    this[gdMa]("complete")
                }
            }
    };
    var gdPd = function(a){
        try {
            return gdQd(a)[gdo]("xdrp-info") == 1
        } 
        catch (b) {
            return false
        }
    }, gdQd = function(a){
        var b = a[gdn][gdr], c = b[gdo]("?"), d = b[gdo]("#"), e = c < 0 ? d : d < 0 ? c : gdfa.min(c, d);
        return b[gds](e)
    };
    gdFd[gd].getResponseJson = function(){
        return this.sl ? eval("(" + this[gdKa] + ")") : gda
    };
    gdFd[gd].reset = function(){
        if (!gdHd) {
            gdLd.log(gdpc, "request frame removed: " + this.oe.id);
            gdkd(this.Rl);
            this.oe[gd5a].removeChild(this.oe)
        }
        delete this.oe
    };
    var gdRd = function(a){
        var b = a[gdo]("?");
        if (b > 0) 
            a = a[gds](0, b);
        var c = a[gdo]("#");
        if (c > 0) 
            a = a[gds](0, c);
        return a
    };
    gdFd[gd].getResponseHeader = function(a){
        return gdlb(this.responseHeaders) ? this.responseHeaders[a] : gda
    };
    gdRd(gdf.referrer);
    var gdSd = function(a, b, c, d, e){
        if (/[;=]/[gdBa](a)) 
            throw Error('Invalid cookie name "' + a + '"');
        if (/;/[gdBa](b)) 
            throw Error('Invalid cookie value "' + b + '"');
        gdu(c) || (c = -1);
        var g = e ? ";domain=" + e : "", h = d ? ";path=" + d : "", i;
        if (c < 0) 
            i = "";
        else 
            if (c == 0) {
                var j = new Date(1970, 1, 1);
                i = ";expires=" + j.toUTCString()
            }
            else {
                var l = new Date((new Date)[gd9a]() + c * 1000);
                i = ";expires=" + l.toUTCString()
            }
        gdf.cookie = a + "=" + b + g + h + i
    }, gdTd = function(a, b){
        var c = a + "=", d = gdb(gdf.cookie)[gdIa](/\s*;\s*/);
        for (var e = 0, g; g = d[e]; e++) 
            if (g[gdo](c) == 0) 
                return g.substr(c[gdj]);
        return b
    }, gdVd = function(a, b, c){
        var d = gdUd(a);
        gdSd(a, "", 0, b, c);
        return d
    }, gdWd = function(){
        var a = gdb(gdf.cookie)[gdIa](/\s*;\s*/), b = [], c = [], d, e;
        for (var g = 0; e = a[g]; g++) {
            d = e[gdo]("=");
            if (d == -1) {
                b[gdi]("");
                c[gdi](e)
            }
            else {
                b[gdi](e[gds](0, d));
                c[gdi](e[gds](d + 1))
            }
        }
        return {
            keys: b,
            values: c
        }
    };
    var gdUd = function(a){
        var b = {};
        return gdTd(a, b) !== b
    };
    var gdXd = function(a, b, c){
        if (!gdKc && !(gdMc && gdHb(gdDc, "525") >= 0)) 
            return true;
        if (gdKc && !c && (b == 17 || b == 18)) 
            return false;
        if (a >= 48 && a <= 57) 
            return true;
        if (a >= 96 && a <= 106) 
            return true;
        if (a >= 65 && a <= 90) 
            return true;
        if (a == 27 && gdMc) 
            return false;
        switch (a) {
            case 13:
            case 27:
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return true;
            default:
                return false
        }
    }, gdYd = function(a){
        if (a >= 48 && a <= 57) 
            return true;
        if (a >= 96 && a <= 106) 
            return true;
        if (a >= 65 && a <= 90) 
            return true;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return true;
            default:
                return false
        }
    };
    var gdZd = function(a){
        gdx[gdq](this);
        this.W = a;
        gdfd(a, "keydown", this.Gd, false, this);
        gdfd(a, "click", this.sj, false, this)
    };
    gdsb(gdZd, gdx);
    gdZd[gd].Gd = function(a){
        if (a[gdXa] == 13 || gdMc && a[gdXa] == 3) 
            this.Tg(a)
    };
    gdZd[gd].sj = function(a){
        this.Tg(a)
    };
    gdZd[gd].Tg = function(a){
        var b = new gd_d(a);
        try {
            if (!this[gdMa](b)) 
                return
        }
        finally {
            b.va()
        }
        var c = new gd0d(a);
        try {
            this[gdMa](c)
        }
        finally {
            c.va();
            a.stopPropagation()
        }
    };
    gdZd[gd].k = function(){
        gdZd.Wa.k[gdq](this);
        gdid(this.W, "keydown", this.Gd, false, this);
        gdid(this.W, "click", this.sj, false, this);
        delete this.W
    };
    var gd0d = function(a){
        gdw[gdq](this, a);
        gdh(this, "action")
    };
    gdsb(gd0d, gdw);
    var gd_d = function(a){
        gdw[gdq](this, a);
        gdh(this, "beforeaction")
    };
    gdsb(gd_d, gdw);
    var gd1d = function(a, b){
        gdZc[gdq](this, a, b)
    };
    gdsb(gd1d, gdZc);
    var gd2d = function(a){
        this.Ol = a
    };
    gdsb(gd2d, gdXc);
    var gd3d = new gdYc(0, 100);
    gd2d[gd].bf = function(a, b, c, d, e){
        if (gdhb(b)) {
            for (var g = 0; g < b[gdj]; g++) 
                this.bf(a, b[g], c, d, e);
            return
        }
        var h = gdfd(a, b, c || this, d || false, e || this.Ol || this);
        if (this.r) 
            this.r[h] = true;
        else 
            if (this.me) {
                this.r = gd3d.ab();
                this.r[this.me] = true;
                this.me = null;
                this.r[h] = true
            }
            else 
                this.me = h
    };
    gd2d[gd].ef = function(){
        if (this.r) {
            for (var a in this.r) {
                gdkd(a);
                delete this.r[a]
            }
            gd3d.fc(this.r);
            this.r = null
        }
        else 
            this.me && gdkd(this.me)
    };
    gd2d[gd].k = function(){
        gd2d.Wa.k[gdq](this);
        this.ef()
    };
    gdsa(gd2d[gd], function(){
        throw Error("EventHandler.handleEvent not implemented");
    });
    var gd4d = function(a){
        gdx[gdq](this);
        this.W = a;
        var b = gdKc ? "focusin" : "focus", c = gdKc ? "focusout" : "blur";
        this.Pl = gdfd(this.W, b, this, !gdKc);
        this.Ql = gdfd(this.W, c, this, !gdKc)
    };
    gdsb(gd4d, gdx);
    gdsa(gd4d[gd], function(a){
        var b = a.Zd(), c = new gdw(b);
        gdh(c, a[gdt] == "focusin" || a[gdt] == "focus" ? "focusin" : "focusout");
        try {
            this[gdMa](c)
        }
        finally {
            c.va()
        }
    });
    gd4d[gd].k = function(){
        gd4d.Wa.k[gdq](this);
        gdkd(this.Pl);
        gdkd(this.Ql);
        delete this.W
    };
    var gd5d = function(a){
        gdx[gdq](this);
        this.W = a;
        var b = gdKc ? "propertychange" : gdMc && a.tagName == "TEXTAREA" ? "keypress" : "input";
        this.cf = gdfd(this.W, b, this)
    };
    gdsb(gd5d, gdx);
    gdsa(gd5d[gd], function(a){
        var b = a.Zd();
        if (b[gdt] == "propertychange" && b.propertyName == "value" || b[gdt] == "input" || b[gdt] == "keypress") {
            if (gdKc) {
                var c = b.srcElement;
                if (c != (c[gdGa] == 9 ? c : c.ownerDocument || c[gdHa]).activeElement) 
                    return
            }
            var d = new gdw(b);
            gdh(d, "input");
            try {
                this[gdMa](d)
            }
            finally {
                d.va()
            }
        }
    });
    gd5d[gd].k = function(){
        gd5d.Wa.k[gdq](this);
        gdkd(this.cf);
        delete this.W
    };
    var gd6d = function(a){
        gdx[gdq](this);
        a && this.yk(a)
    };
    gdsb(gd6d, gdx);
    gd6d[gd].W = null;
    gd6d[gd].ke = null;
    gd6d[gd].af = null;
    gd6d[gd].le = null;
    gd6d[gd].Jd = -1;
    gd6d[gd].Id = -1;
    gd6d[gd].xj = 0;
    var gd7d = {
        "3": 13,
        "12": 144,
        "63232": 38,
        "63233": 40,
        "63234": 37,
        "63235": 39,
        "63236": 112,
        "63237": 113,
        "63238": 114,
        "63239": 115,
        "63240": 116,
        "63241": 117,
        "63242": 118,
        "63243": 119,
        "63244": 120,
        "63245": 121,
        "63246": 122,
        "63247": 123,
        "63248": 44,
        "63272": 46,
        "63273": 36,
        "63275": 35,
        "63276": 33,
        "63277": 34,
        "63289": 144,
        "63302": 45
    }, gd8d = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, gd9d = {
        61: 187,
        59: 186
    }, gd$d = gdKc || gdMc && gdHb(gdDc, "525") >= 0;
    gd6d[gd].Gd = function(a){
        if (gd$d && !gdXd(a[gdXa], this.Jd, a.shiftKey)) 
            this[gdZa](a);
        else 
            this.Id = gdLc && a[gdXa] in gd9d ? gd9d[a[gdXa]] : a[gdXa]
    };
    gd6d[gd].Tk = function(){
        this.Jd = -1
    };
    gdsa(gd6d[gd], function(a){
        var b = a.Zd(), c, d;
        if (gdKc && a[gdt] == gd_c) {
            c = this.Id;
            d = c != 13 && c != 27 ? b[gdXa] : 0
        }
        else 
            if (gdMc && a[gdt] == gd_c) {
                c = this.Id;
                d = b[gdSa] >= 0 && b[gdSa] < 63232 && gdYd(c) ? b[gdSa] : 0
            }
            else 
                if (gdJc) {
                    c = this.Id;
                    d = gdYd(c) ? b[gdXa] : 0
                }
                else {
                    c = b[gdXa] || this.Id;
                    d = b[gdSa] || 0;
                    if (gdFc && d == 63 && !c) 
                        c = 191
                }
        var e = c, g = b.keyIdentifier;
        if (c) 
            if (c >= 63232 && c in gd7d) 
                e = gd7d[c];
            else {
                if (c == 25 && a.shiftKey) 
                    e = 9
            }
        else 
            if (g && g in gd8d) 
                e = gd8d[g];
        var h = e == this.Jd;
        this.Jd = e;
        if (gdMc) {
            if (h && b.timeStamp - this.xj < 50) 
                return;
            this.xj = b.timeStamp
        }
        var i = new gdae(e, d, h, b);
        try {
            this[gdMa](i)
        }
        finally {
            i.va()
        }
    });
    gd6d[gd].yk = function(a){
        this.le &&
        this.detach();
        this.W = a;
        this.ke = gdfd(this.W, gd_c, this);
        this.af = gdfd(this.W, "keydown", this.Gd, false, this);
        this.le = gdfd(this.W, "keyup", this.Tk, false, this)
    };
    gd6d[gd].detach = function(){
        if (this.ke) {
            gdkd(this.ke);
            gdkd(this.af);
            gdkd(this.le);
            this.ke = null;
            this.af = null;
            this.le = null
        }
        this.W = null;
        this.Jd = -1
    };
    gd6d[gd].k = function(){
        gd6d.Wa.k[gdq](this);
        this.detach()
    };
    var gdae = function(a, b, c, d){
        gdw[gdq](this, d);
        gdh(this, "key");
        gdqa(this, a);
        this.charCode = b;
        this.repeat = c
    };
    gdsb(gdae, gdw);
    var gdbe = function(a){
        gdx[gdq](this);
        this.W = a;
        var b = gdLc ? "DOMMouseScroll" : "mousewheel";
        this.cf = gdfd(this.W, b, this)
    };
    gdsb(gdbe, gdx);
    gdsa(gdbe[gd], function(a){
        var b = 0, c = a.Zd();
        if (c[gdt] == "mousewheel") {
            b = -c.wheelDelta / 40;
            if (gdMc) 
                b /= 3
        }
        else 
            b = c.detail;
        if (b > 100) 
            b = 3;
        else 
            if (b < -100) 
                b = -3;
        var d = new gdce(b, c);
        try {
            this[gdMa](d)
        }
        finally {
            d.va()
        }
    });
    gdbe[gd].k = function(){
        gdbe.Wa.k[gdq](this);
        gdkd(this.cf);
        delete this.cf
    };
    var gdce = function(a, b){
        gdw[gdq](this, b);
        gdh(this, "mousewheel");
        this.detail = a
    };
    gdsb(gdce, gdw);
    var gdee = function(a, b){
        gdx[gdq](this);
        this.je = a || 1;
        this.ve = b || gdde;
        this.Og = gdqb(this.Al, this);
        this.yj = gdrb()
    };
    gdsb(gdee, gdx);
    gdee[gd].Cd = false;
    var gdde = gdcb.window, gdfe = 0.8;
    gdee[gd].ha = null;
    gdee[gd].setInterval = function(a){
        this.je = a;
        if (this.ha && this.Cd) {
            this[gdya]();
            this.start()
        }
        else 
            this.ha && this[gdya]()
    };
    gdee[gd].Al = function(){
        if (this.Cd) {
            var a = gdrb() - this.yj;
            if (a > 0 && a < this.je * gdfe) {
                this.ha = this.ve[gdFa](this.Og, this.je - a);
                return
            }
            this.Ek();
            if (this.Cd) {
                this.ha = this.ve[gdFa](this.Og, this.je);
                this.yj = gdrb()
            }
        }
    };
    gdee[gd].Ek = function(){
        this[gdMa]("tick")
    };
    gdee[gd].start = function(){
        this.Cd = true;
        if (!this.ha) {
            this.ha = this.ve[gdFa](this.Og, this.je);
            this.yj = gdrb()
        }
    };
    gdee[gd].stop = function(){
        this.Cd = false;
        if (this.ha) {
            this.ve.clearTimeout(this.ha);
            this.ha = null
        }
    };
    gdee[gd].k = function(){
        gdee.Wa.k[gdq](this);
        this[gdya]();
        delete this.ve
    };
    var gdge = function(){
        gdx[gdq](this);
        this.Qe = new gd2d(this);
        if (!gdMc) 
            if (gdLc && gdHb(gdDc, "1.9b") >= 0 || gdKc && gdHb(gdDc, "8") >= 0 || gdJc && gdHb(gdDc, "9.5") >= 0) 
                this.Qe.bf(gdc, ["online", "offline"], this.rj);
            else {
                this.jl = this.Ze();
                this.ha = new gdee(250);
                this.Qe.bf(this.ha, "tick", this.Uk);
                this.ha.start()
            }
    };
    gdsb(gdge, gdx);
    gdge[gd].Ze = function(){
        return "onLine" in gdaa ? gdaa.onLine : true
    };
    gdge[gd].Uk = function(a){
        var b = this.Ze();
        if (b != this.jl) {
            this.jl = b;
            this.rj(a)
        }
    };
    gdge[gd].rj = function(){
        var a = this.Ze() ? "online" : "offline";
        this[gdMa](a)
    };
    gdge[gd].k = function(){
        gdge.Wa.k[gdq](this);
        this.Qe.va();
        delete this.Qe;
        if (this.ha) {
            this.ha.va();
            delete this.ha
        }
    };
    var gdhe = "https://www.google.com/accounts/";
    var gdie = function(){
        this.pe = ""
    };
    gdie[gd].he = function(a){
        return "g314-" + gdba(a)
    };
    gdie[gd].Si = function(){
        return "g314-scope"
    };
    gdie[gd].cc = function(a){
        return gdTd(this.he(a))
    };
    gdie[gd].zl = function(a, b){
        gdSd(this.he(a), b, 63072000)
    };
    gdie[gd].rl = function(a){
        gdVd(this.he(a))
    };
    gdie[gd].We = function(){
        if (gdub(this.pe)) 
            return true;
        return false
    };
    gdie[gd].Fd = function(){
        if (gdub(this.pe)) 
            this.pe = gdea(gdTd(this.Si()));
        return this.pe
    };
    gdie[gd].ng = function(a){
        this.pe = a;
        gdSd(this.Si(), gdba(a), 63072000)
    };
    var gdje = function(){
    };
    gdje[gd].tl = function(a, b){
        gdJd(gdhe + "AuthSubRevokeTokenJS", b, "POST", {
            auth: a
        })
    };
    gdje[gd].Cl = function(a, b, c){
        gdJd(gdhe + "AuthSubSessionTokenJS", this.ql(this, b, a), "POST", {
            auth: c
        })
    };
    gdje[gd].ql = function(a, b, c){
        return function(d){
            if (!d || !d[gdp] || !d[gdp][gdKa] || !d[gdp].sl) 
                return;
            var e = eval("(" + d[gdp][gdKa] + ")");
            if (!e.auth) 
                return;
            c.zl(b, e.auth);
            var g = gdf[gdn][gdr], h = g[gdo]("#2");
            if (h < 0) 
                return;
            var i = g[gds](0, h);
            a.ul(i)
        }
    };
    gdje[gd].al = function(a){
        var b = /#.+$/, c = top[gdn][gdr][gdk](b, ""), d = a[gdk](b, "");
        return c == d
    };
    gdje[gd].ul = function(a){
        if (gdMc && this.al(a)) {
            gdra(top[gdn], a);
            var b = gdf[gdVa]("input");
            gdh(b, "button");
            gdg(b, "reload");
            b.onclick = function(){
                gdc[gdn].reload()
            };
            b[gdNa].display = "none";
            gdf[gdPa][gdwa](b);
            var c = gdf.createEvent("MouseEvents");
            c.initMouseEvent("click", true, true, gdf.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
            var d = function(){
                b[gdMa](c)
            };
            gdc[gdFa](d, 1000)
        }
        else 
            gdc[gdFa](this.pl(a), 50)
    };
    gdje[gd].pl = function(a){
        return function(){
            gdra(top[gdn], a)
        }
    };
    gdje[gd].Ok = function(a, b){
        gdJd(gdhe + "AuthSubTokenInfoJS", b, "POST", {
            auth: a
        })
    };
    var gdke = function(){
        this.da = new gdie;
        this.sb = null
    }, gdle = function(a){
        return function(){
            a.ol()
        }
    };
    gdke[gd].ol = function(){
        if (this.da.We()) 
            return;
        var a = gdf[gdn][gdr], b = a[gdo]("#2");
        if (b >= 0) 
            return;
        var c = gdf[gdn][gdr], d = c[gdo]("#");
        if (d >= 0) 
            c = c[gds](0, d);
        gdra(top[gdn], gdhe + "AuthSubRequestJS?session=1&scope=" + this.da.Fd() + "&next=" + gdba(c))
    };
    gdke[gd].checkLogin = function(a){
        if (!gdub(a)) {
            var b = this.da.he(a), c = gdWd().keys;
            for (var d = 0; d <
            c[gdj] &&
            c[d]; d++) 
                if (0 == b[gdo](c[d])) {
                    this.da.ng(gdea(c[d][gds]("g314-"[gdj])));
                    return gdTd(c[d])
                }
        }
        this.da.ng(a);
        return ""
    };
    gdke[gd].login = function(a){
        var b;
        if (!gdub(a)) {
            b = this.checkLogin(a);
            if (!gdub(b)) 
                return b
        }
        if (this.da.We()) 
            throw Error("No scope is set for login().");
        var c = 50;
        gdme || (c = 200);
        gdc[gdFa](gdle(this), c);
        return null
    };
    gdke[gd].logout = function(a){
        var b = this.da.Fd();
        if (gdub(b)) 
            return false;
        var c = this.da.cc(b);
        if (gdub(c)) 
            return false;
        this.da.rl(b);
        this.da.ng("");
        if (this.sb == null) 
            this.sb = new gdje;
        this.sb.tl(c, a);
        return true
    };
    gdke[gd].getInfo = function(a){
        if (this.da.We()) 
            return false;
        var b = this.da.cc(this.da.Fd());
        if (gdub(b)) 
            return false;
        if (this.sb == null) 
            this.sb = new gdje;
        this.sb.Ok(b, a);
        return true
    };
    gdke[gd].ml = function(){
        var a = gdf[gdn][gdr], b = a[gdo]("#2");
        if (b < 0) 
            return;
        this.da.cc(this.da.Fd());
        var c = gdea(gdf[gdn].hash[gds](1));
        if (this.sb == null) 
            this.sb = new gdje;
        this.sb.Cl(this.da, this.da.Fd(), c)
    };
    var gdme = false, gdne = new gdke, gdoe = function(){
        gdne.ml();
        gdme = true
    };
    gdfd(gdc, "load", gdoe);
    gdv("google.accounts.user", gdne);
    if (typeof framework == "undefined") 
        framework = gda;
    if (typeof gadgets == "undefined") 
        gadgets = gda;
    if (typeof XULDocument == "undefined") 
        XULDocument = gda;
    var gdpe = framework ? null : this, gdA = {};
    gdv("google.gdata", gdA);
    gdA.runtime = {};
    gdA.runtime.detect = function(){
        var a = gdA.runtime;
        if (typeof framework == "object" && framework.graphics) {
            gdh(a, a.TYPE.GD);
            a.isIe = true;
            return
        }
        if (typeof gdpe.gadgets == "object" && gdpe.gadgets.io) {
            gdh(a, a.TYPE.OS);
            a.detectBrowser();
            return
        }
        if (typeof gdpe._IG_Prefs == "function") {
            gdh(a, a.TYPE.IG);
            a.detectBrowser();
            return
        }
        if (typeof gdpe.widget == "function" && gdpe.widget.identifier && typeof gdpe.widget.openApplication == "function") {
            gdh(a, a.TYPE.MD);
            a.isSafari = true;
            a.isKhtml = true;
            return
        }
        if (typeof gdpe.GM_xmlhttpRequest ==
        "function") {
            gdh(a, a.TYPE.GM);
            a.isGecko = true;
            return
        }
        if (typeof gdpe.konfabulatorVersion == "function") {
            gdh(a, a.TYPE.KF);
            return
        }
        if (typeof gdpe.XULDocument == "object" && gdpe[gdHa] instanceof gdpe.XULDocument) {
            gdh(a, a.TYPE.FE);
            a.isGecko = true;
            return
        }
        gdh(a, a.TYPE.UP);
        a.detectBrowser()
    };
    gdA.runtime.detectBrowser = function(){
        var a = gdaa.userAgent, b = gdA.runtime;
        b.isOpera = typeof opera != "undefined";
        b.isIe = !b.isOpera && a[gdo]("MSIE") != -1;
        b.isSafari = !b.isOpera && a[gdo]("Safari") != -1;
        b.isGecko = !b.isOpera &&
        gdaa.product ==
        "Gecko" &&
        !b.isSafari;
        b.isKonqueror = !b.isOpera && a[gdo]("Konqueror") != -1;
        b.isKhtml = b.isKonqueror || b.isSafari
    };
    gdA.runtime.TYPE = {
        FE: "Firefox Extension",
        GM: "GreaseMonkey",
        GD: "Google Desktop",
        IG: "Google Personalized Start Page",
        KF: "Yahoo Widget Engine",
        MD: "Mac OS X Dashboard",
        OS: "OpenSocial Gadget",
        UP: "Unprivileged"
    };
    gdA.runtime.detect();
    gdA.util = {};
    gdA.util.trim = function(a){
        return gdjb(a) ? gdvb(a) : a
    };
    gdA.util.bl = function(a){
        return gdjb(a) || a && a[gdl] == gdb
    };
    gdA.util.convertXmlTextToDom = function(a){
        if (gdA.runtime[gdt] == gdA.runtime.TYPE.GD) {
            var b = new DOMDocument;
            b.loadXML(a);
            return b
        }
        else 
            if (gdA.runtime.isIe) {
                var b = new ActiveXObject("Microsoft.XMLDOM");
                b.async = false;
                b.loadXML(a);
                return b
            }
            else 
                if (typeof gdpe.DOMParser != "undefined") {
                    var c = new DOMParser;
                    return c.parseFromString(a, "text/xml")
                }
                else 
                    throw Error("runtime not supported");
    };
    gdA.util.convertXmlTextToJavaScript = function(a){
        a = gdA.util.trim(a);
        if (a[gdj] == 0) 
            return null;
        var b = gdA.util.convertXmlTextToDom(a);
        return gdA.util.convertDomToJavaScript(b)
    };
    gdA.util.convertDomToJavaScript = function(a){
        if (gdA.runtime.isIe) {
            var b = a.lastChild, c = gdA.util.Ne(b), d = {}, e = a.firstChild[gd3a];
            for (var g = 0; g < e[gdj]; g++) {
                var h = e[g];
                d[h[gdOa]] = h[gdab]
            }
            d[b[gdOa]] = c;
            return d
        }
        else {
            var b = a.documentElement, c = gdA.util.Ne(b), d = {
                version: a.xmlVersion || "1.0",
                encoding: a.xmlEncoding || "UTF-8"
            };
            d[c.channel ? "rss" : b[gdOa]] = c;
            gdA.util.buildNamespaceDictionaries(c);
            return d
        }
    };
    gdA.util.Ne = function(a){
        var b = {};
        if (a[gd3a]) 
            for (var c = 0; c < a[gd3a][gdj]; c++) {
                var d = a[gd3a][c], e = d[gdOa][gdk](/:/g, "$"), g = d[gdab];
                if (e[gdo]("_moz-") < 0) 
                    b[e] = g
            }
        if (a[gd2a][gdj] == 1 && a[gd2a][0][gdGa] == 3) 
            b.$t = a[gd2a][0][gdab];
        else 
            for (var c = 0; c < a[gd2a][gdj]; c++) {
                var h = a[gd2a][c];
                if (h[gdGa] != 3) {
                    var e = h.tagName;
                    e = e[gdk](/:/g, "$");
                    var i = b[e];
                    if (i) {
                        i instanceof Array || (b[e] = [b[e]]);
                        b[e][gdi](gdA.util.Ne(h))
                    }
                    else {
                        var j = gdA.util.Ne(h);
                        b[e] = e == "entry" ? [j] : j
                    }
                }
            }
        return b
    };
    gdA.util.convertJsonTextToJavaScript = function(a){
        a = gdA.util.trim(a);
        if (a[gdj] == 0) 
            return null;
        var b = a[gdk](/\r/g, "\\r"), c = b[gdk](/\n/g, "\\n"), d = eval("(" + c + ")");
        gdA.util.buildNamespaceDictionaries(d.feed || d.entry);
        return d
    };
    gdA.util.convertEntryToAtom = function(a){
        var b = "<?xml version='" + (a.$version || "1.0") + "' encoding='" + (a.$encoding || "UTF-8") + "' ?>";
        return b + gdA.util.convertJavaScriptToAtom("entry", a)
    };
    gdA.util.Zk = function(a){
        return gdtb(a, "___")
    };
    gdA.util.Pg = function(a, b, c){
        var d = b.$t;
        c[gdi]("<", a);
        for (var e in b) 
            if (e.charAt(0) != "$" &&
            e != "__proto__" &&
            !gdA.util.Zk(e)) {
                var g = b[e], h = typeof g;
                if (h == "string" || h == "number" || h == "boolean") {
                    e = e[gdk]("$", ":");
                    c[gdi](" ", e, "='", gdA.util.Ml(g), "'")
                }
                else 
                    if (g && h == "object") 
                        d = true
            }
        if (d) {
            c[gdi](">");
            for (var e in b) 
                if (e.charAt(0) != "$" && e != "__proto__" && !gdA.util.Zk(e)) {
                    var g = b[e];
                    if (g && typeof g == "object") {
                        e = e[gdk]("$", ":");
                        if (g instanceof Array) 
                            for (var i = 0, j = g[gdj]; i < j; i++) 
                                gdA.util.Pg(e, g[i], c);
                        else 
                            gdA.util.Pg(e, g, c)
                    }
                }
            b.$t && c[gdi](gdA.util.Gk(b.$t));
            c[gdi]("</", a, ">")
        }
        else 
            c[gdi]("/>")
    };
    gdA.util.convertJavaScriptToAtom = function(a, b){
        var c = [];
        gdA.util.Pg(a, b, c);
        return c[gd$a]("")
    };
    (function(){
        var a = "";
        for (var b = 0; b < 32; b++) 
            if (b != 9 && b != 10 && b != 13) {
                var c = (b < 16 ? "0" : "") + b.toString(16);
                a += "\\x" + c
            }
        gdA.util.Tl = new RegExp("[" + a + "]", "g")
    })();
    gdA.util.Ul = function(a){
        return a[gdk](gdA.util.Tl, "")
    };
    gdA.util.Gk = function(a){
        return a && gdA.util.bl(a) ? gdA.util.Ul(a)[gdk](/&/g, "&amp;")[gdk](/</g, "&lt;")[gdk](/>/g, "&gt;") : a
    };
    gdA.util.Ml = function(a){
        return a && gdA.util.bl(a) ? gdA.util.Gk(a)[gdk](/"/g, "&quot;")[gdk](/'/g, "&apos;") : a
    };
    gdA.util.buildNamespaceDictionaries = function(a){
        for (var b in a) {
            var c = a[b];
            if (b[gdo]("xmlns") == 0) {
                var d = b == "xmlns" ? "" : b[gds]("xmlns$"[gdj]);
                if (!a.$ns) 
                    a.$ns = {};
                a.$ns[d] = c;
                if (!a.$rns) 
                    a.$rns = {};
                a.$rns[c] = d
            }
        }
    };
    gdA.util.ya = function(a, b){
        var c = a.link;
        if (c) 
            for (var d = 0; d < c[gdj]; d++) {
                var e = c[d];
                if (e.rel == b) 
                    return e
            }
        return null
    };
    gdA.util.copy = function(a){
        var b = {};
        for (var c in a) 
            b[c] = a[c];
        return b
    };
    gdA.util.log = function(a){
        if (gdpe.console && typeof gdpe.console.log == "function") 
            gdpe.console.log[gd1a](this, arguments);
        else {
            var b = gdf[gdVa]("div");
            b.innerHTML = a;
            gdf[gdPa][gdwa](b)
        }
    };
    gdA.util.isService = function(a, b){
        return a[gdo]("google.com/" + b + "/") > 0
    };
    gdA.util.getRandomInt = function(a, b){
        return gdfa[gdJa](gdfa.random() * (b - a + 1) + a)
    };
    gdA.util.mutateTo = function(a, b){
        if (!a) 
            return gda;
        if (a.__proto__) {
            a.__proto__ = b[gd];
            a.constructor = b;
            b[gdq](a);
            return a
        }
        else {
            var c = new b;
            for (var d in a) 
                c[d] = a[d];
            c.__proto__ = b[gd];
            c.constructor = b;
            b[gdq](c);
            return c
        }
    };
    gdA.util.handleError = function(a, b){
        if (!b || !(b instanceof gdda)) 
            throw a;
        return b(a)
    };
    gdA.util.getTimezoneOffsetString = function(a){
        var b, c = a.getTimezoneOffset();
        if (c == 0) 
            b = "Z";
        else {
            var d = gdfa.abs(c) / 60, e = gdfa[gdJa](d), g = (d - e) * 60;
            b = (c > 0 ? "-" : "+") + gdFb(e, 2) + ":" + gdFb(g, 2)
        }
        return b
    };
    gdA.util.Te = function(a, b, c){
        for (var d = 0; d < a[gdj]; d++) {
            var e = a[d];
            if ((!b || b == e.i()) && (!c || c == e.U())) 
                return d
        }
        return gda
    };
    gdA.util.El = /("[^"]*":")(.*?)(","[^"]*":)/;
    gdA.util.Nl = function(a){
        a = a[gdk](/\}/g, ',"_\u0001":null}');
        for (var b = 0;;) {
            var c = a[gds](b), d = gdA.util.El[gdCa](c);
            if (!d) 
                break;
            var e = 0;
            if (d[2][gdo]('"') >= 0) {
                var g = d[2][gdk](/"/g, '\\"'), h = d.index + d[1][gdj], i = d[2][gdj];
                e = h + i;
                a = a[gds](0, b + h) + g + a[gds](b + e)
            }
            b += e + 2
        }
        a = a[gdk](/,"_\x01":null\}/g, "}");
        return a
    };
    var gdqe = function(a, b){
        this.date = a;
        this.dateOnly = b == true
    };
    gdv("google.gdata.DateTime", gdqe);
    gdqe[gd].getDate = function(){
        return this.date
    };
    gdv("google.gdata.DateTime.prototype.getDate", gdqe[gd].getDate);
    gdqe[gd].setDate = function(a){
        this.date = a
    };
    gdv("google.gdata.DateTime.prototype.setDate", gdqe[gd].setDate);
    gdqe[gd].Ve = function(){
        return this.dateOnly
    };
    gdv("google.gdata.DateTime.prototype.isDateOnly", gdqe[gd].Ve);
    gdqe[gd].Jj = function(a){
        this.dateOnly = a
    };
    gdv("google.gdata.DateTime.prototype.setDateOnly", gdqe[gd].Jj);
    gdqe[gd].Wd = function(a){
        return this.dateOnly == a.dateOnly && this.date[gd9a]() == a.date[gd9a]()
    };
    gdv("google.gdata.DateTime.prototype.equals", gdqe[gd].Wd);
    var gdB = function(a){
        var b = gdca(a[gds](0, 4), 10), c = gdca(a[gds](5, 7), 10) - 1, d = gdca(a[gds](8, 10), 10);
        if (a.toUpperCase()[gdo]("T") == -1) 
            return new gdqe(new Date(b, c, d), true);
        var e = gdca(a[gds](11, 13), 10), g = gdca(a[gds](14, 16), 10), h = gdca(a[gds](17, 19), 10), i = gdca(a[gds](20, 23), 10), j = new Date(b, c, d, e, g, h, i);
        if (a[gdj] > 23) {
            var l = 0, k = a.charAt(23);
            if (k !==
            "Z") {
                var m = gdca(a[gds](24, 26), 10), n = gdca(a[gds](27, 29), 10);
                l = m * 60 + n;
                if (k !== "-") 
                    l = -l
            }
            l -= j.getTimezoneOffset();
            l != 0 && j.setTime(j[gd9a]() + l * 60000)
        }
        return new gdqe(j)
    };
    gdv("google.gdata.DateTime.fromIso8601", gdB);
    var gdre = function(a){
        var b = a instanceof gdqe, c = b ? a.date : a, d = c.getFullYear() + "-" + gdFb(c.getMonth() + 1, 2) + "-" + gdFb(c.getDate(), 2);
        if (b && a.Ve()) 
            return d;
        return d + "T" + gdFb(c.getHours(), 2) + ":" + gdFb(c.getMinutes(), 2) + ":" + gdFb(c.getSeconds(), 2) + "." + gdFb(c.getMilliseconds(), 3) + gdA.util.getTimezoneOffsetString(c)
    };
    gdv("google.gdata.DateTime.toIso8601", gdre);
    gdA.mimeType = {};
    gdA.mimeType.ATOM = "application/atom+xml";
    gdA.mimeType.HTML = "text/html";
    gdA.client = {};
    gdv("google.gdata.client", gdA.client);
    gdA.client.ob = function(a){
        if (gdA.client.$k) 
            return;
        gdA.client.$k = true;
        try {
            gdA.client.Kl();
            gdA.client.Jl()
        } 
        catch (b) {
            a ? a(b) : alert(b.message)
        }
    };
    gdv("google.gdata.client.init", gdA.client.ob);
    gdA.client.$k = false;
    gdA.client.Me = function(a, b){
        var c = a[gdIa]("."), d = b[gdIa](".");
        for (var e = 0; e < c[gdj] || e < d[gdj]; e++) {
            var g = e >= c[gdj] ? 0 : gdd(c[e]), h = e >= d[gdj] ? 0 : gdd(d[e]);
            if (g > h) 
                return true;
            if (g < h) 
                return false
        }
        return true
    };
    gdA.client.Kl = function(){
        if (gdA.runtime[gdt] ===
        gdA.runtime.TYPE.MD) 
            return;
        else 
            if (gdA.runtime[gdt] === gdA.runtime.TYPE.FE) {
                var a = "1.9";
                if (!this.Me(gdDc, a)) 
                    throw Error("Unsupported XULRunner version. Minimum required version is " + b + ".  Continue at your own risk.");
            }
            else 
                if (gdA.runtime[gdt] !== gdA.runtime.TYPE.UP && gdA.runtime[gdt] !== gdA.runtime.TYPE.IG && gdA.runtime[gdt] !== gdA.runtime.TYPE.OS) 
                    throw Error("Unsupported client environment.  Continue at your own risk.");
        if (gdLc) {
            var b = "1.5";
            if (!this.Me(gdDc, b)) 
                throw Error("Unsupported Firefox version.  Minimum required version is " +
                b +
                ".  Continue at your own risk.");
        }
        else 
            if (gdKc) {
                var c = "6.0";
                if (!this.Me(gdDc, c)) 
                    throw Error("Unsupported Internet Explorer version.  Minimum required version is " + c + ".  Continue at your own risk.");
            }
            else 
                if (gdMc) {
                    var d = "523.0";
                    if (!this.Me(gdDc, d)) 
                        throw Error("Unsupported WebKit version.  Minimum required version is " + d + ".  Continue at your own risk.");
                }
                else 
                    throw Error("Unsupported browser.  Continue at your own risk.");
    };
    gdA.client.Jl = function(){
        var a = gdc.google && gdc.google.loader;
        if (a && a.LoadFailure &&
        a.OriginalAppPath === gdc[gdn][gdr]) 
            throw Error("Developer key validation failed.");
    };
    gdpa(gdA.client, {
        OK: 200,
        NOT_OK: 300,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        PRECONDITION_FAILED: 412,
        INTERNAL_SERVER_ERROR: 500
    });
    var gdse = function(a){
        var b = function(d){
            return "string" == typeof d && d[gdj] > 0 ? d : null
        }, c = a.match(/^(?:([^:\/?#]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/);
        if (c) {
            gdla(this, b(c[1]));
            this.credentials = b(c[2]);
            this.domain = b(c[3]);
            this.port = b(c[4]);
            this.path = b(c[5]);
            this.query = b(c[6]);
            this.fragment = b(c[7])
        }
    }, gdte = function(a, b){
        var c = new gdse(a), d = new gdse(b);
        return (c.domain == null || c.domain == d.domain) && (c[gdUa] == null || c[gdUa] == d[gdUa])
    };
    gdA.client.xmlHttpRequest = {};
    gdA.client.xmlHttpRequest.sendAsyncRequest = function(a, b, c, d, e, g){
        if (gdA.runtime[gdt] == gdA.runtime.TYPE.GM) {
            GM_xmlhttpRequest({
                method: a,
                url: b,
                headers: d,
                data: c,
                onload: function(k){
                    e(k, g)
                },
                onerror: g
            });
            return
        }
        var h = null;
        if (gdA.runtime.isIe) 
            h = new ActiveXObject("Microsoft.XMLHTTP");
        else {
            h = new XMLHttpRequest;
            h.onerror = function(k){
                var m = "";
                try {
                    var m = Error("Error occurred: " + k[gdp][gdxa]);
                    gdpa(m, k[gdp][gdRa]);
                    m.statusText = k[gdp][gdxa]
                } 
                catch (n) {
                    m = Error("Error occurred")
                }
                if (g) 
                    return g(m);
                else 
                    throw m;
            }
        }
        try {
            h.open(a, b, true)
        } 
        catch (i) {
            if (typeof i == "string") {
                i = Error(i);
                i.cause = h
            }
            if (g) 
                return g(i);
            else 
                throw i;
        }
        h.onreadystatechange = function(){
            h.readyState == 4 && e(h, g)
        };
        if (d) 
            for (var j in d) {
                var l = d[j];
                gdjb(l) || (l = gdb(l));
                h.setRequestHeader(j, l)
            }
        try {
            h.send(c || "")
        } 
        catch (i) {
            if (typeof i == "string") {
                i = Error(i);
                i.cause = h
            }
            if (g) 
                return g(i);
            else 
                throw i;
        }
    };
    var gdue = function(){
        this.aa = {};
        var a = gdA.client.alt;
        this.aa[a.ATOM] = a.ATOM;
        this.aa[a.RSS] = a.RSS;
        this.aa[a.JSON] = a.JSON
    };
    gdue[gd].xa = function(a){
        return this.aa[a]
    };
    gdue[gd].Pa = function(a, b, c, d, e, g, h, i, j, l){
        if (b[gdo]("user-agent=") < 0) {
            b = b + (b[gdo]("?") > 0 ? "&" : "?") + "alt=" + c;
            b += "&user-agent=" + h;
            if (g) 
                b += "&key=" + g
        }
        gdA.client.xmlHttpRequest.sendAsyncRequest(a, b, d, e, j, l)
    };
    var gdve = function(){
        this.aa = {};
        var a = gdA.client.alt;
        this.aa[a.ATOM] = a.ATOM_IN_SCRIPT;
        this.aa[a.RSS] = a.RSS_IN_SCRIPT;
        this.aa[a.JSON] = a.JSON_IN_SCRIPT
    }, gdwe = 0, gdxe = {}, gdze = function(a, b){
        var c = b || 0, d = gdye(c);
        if (d) {
            gdf[gdPa].removeChild(d.script);
            delete d.script;
            return d.continuation[gdq](d.self, a)
        }
        else 
            throw Error('script request "' + c + '" not found');
    };
    if (typeof gdata == "undefined") 
        gdata = {};
    gdata.io = {
        handleScriptLoaded: gdze
    };
    gdve[gd].xa = function(a){
        return this.aa[a]
    };
    gdve[gd].tk = 10000;
    gdve[gd].Mg = "Request via script load timed out. Possible causes: feed URL is incorrect; feed requires authentication";
    gdve[gd].Pa = function(a, b, c, d, e, g, h, i, j, l){
        var k = ++gdwe, m = gdpe[gdHa][gdVa]("script");
        b = b + (b[gdo]("?") > 0 ? "&" : "?") + "alt=" + c + "&reqid=" + k;
        b += "&user-agent=" + h;
        if (g) 
            b += "&key=" + g;
        m.src = b;
        if (l) 
            if (gdA.runtime.isIe) 
                gdc[gdFa]((function(p){
                    var q = gdye(p);
                    q && l(Error(this.Mg))
                }).bind(this, k), this.tk);
            else 
                m.onerror = (function(p){
                    if (p == "Error loading script") 
                        p = this.Mg;
                    j({
                        status: 400,
                        statusText: p
                    }, l)
                }).bind(this);
        var n = {
            continuation: function(p){
                gdA.util.buildNamespaceDictionaries(p.feed || p.entry);
                j({
                    status: 200,
                    responseText: p
                }, l)
            },
            self: i,
            script: m
        }, o = "req" + k;
        gdxe[o] = n;
        gdpe[gdHa][gdPa][gdwa](m)
    };
    var gdye = function(a){
        var b = "req" + a, c = gdxe[b];
        delete gdxe[b];
        return c
    };
    var gdAe = function(){
        this.aa = {};
        var a = gdA.client.alt;
        this.aa[a.JSON] = a.JSON_XD
    };
    gdAe[gd].xa = function(a){
        return this.aa[a]
    };
    gdAe[gd].Pa = function(a, b, c, d, e, g, h, i, j, l){
        var k = {};
        this.kl(b, k);
        k.alt = c;
        k.body = d;
        if (a != "POST") 
            e["X-HTTP-Method-Override"] = a;
        k["user-agent"] = h;
        if (g) {
            var m = "key";
            k[m] = g
        }
        gdJd(b, function(n){
            if (n[gdp][gdRa] < gdA.client[gdRa].NOT_OK) 
                if (/^[\s\xa0]*$/[gdBa](n[gdp][gdKa])) 
                    gdka(n[gdp], null);
                else {
                    gdka(n[gdp], n[gdp][gdKa][gdk](/\n/g, "\\n"));
                    gdka(n[gdp], n[gdp][gdKa][gdk](/\r/g, "\\r"));
                    try {
                        gdka(n[gdp], gdsd(n[gdp][gdKa]))
                    } 
                    catch (o) {
                        try {
                            var p = gdA.util.Nl(n[gdp][gdKa]);
                            gdka(n[gdp], gdsd(p))
                        } 
                        catch (o) {
                            var q = Error("Invalid JSON format. Unescaped JSON is a not supported format for attribute or text values.");
                            if (l) 
                                l(q);
                            else 
                                throw q;
                        }
                    }
                }
            else 
                if (!n[gdp][gdxa]) 
                    n[gdp].statusText = n[gdp][gdKa];
            j(n[gdp], l)
        }, "POST", k, e)
    };
    gdAe[gd].kl = function(a, b){
        var c = gdAd(a), d = c.Bi(), e = d.lb();
        for (var g = 0; g < e[gdj]; g++) {
            var h = e[g], i = d.pa(h);
            b[h] = i && i[gdj] > 0 ? i[0] : null
        }
    };
    gdc[gdn] && gdc[gdn].hash[gdo]("__debug") > 0 && gdKd(true);
    var gdBe = function(){
        this.aa = {};
        var a = gdA.client.alt;
        this.aa[a.ATOM] = a.ATOM;
        this.aa[a.JSON] = a.JSON;
        this.aa[a.RSS] = a.RSS
    }, gdCe = "OPEN_SOCIAL_HEADERS";
    gdBe[gd].xa = function(a){
        return this.aa[a]
    };
    gdBe[gd].Pa = function(a, b, c, d, e, g, h, i, j, l){
        if (b[gdo]("user-agent=") < 0) {
            b = b + (b[gdo]("?") > 0 ? "&" : "?") + "alt=" + c;
            b += "&user-agent=" + h;
            if (g) 
                b += "&key=" + g
        }
        var k = {}, m = e[gdCe];
        if (m) {
            for (var n in m) 
                k[n] = m[n];
            delete e[gdCe]
        }
        k[gadgets.io.RequestParameters.HEADERS] = e;
        k[gadgets.io.RequestParameters.POST_DATA] = d;
        k[gadgets.io.RequestParameters.METHOD] = a;
        k[gadgets.io.RequestParameters.CONTENT_TYPE] = c == gdA.client.alt.JSON ? gadgets.io.ContentType.JSON : gadgets.io.ContentType.TEXT;
        var o = function(p){
            var q = {};
            if (p.errors && p.errors[gdj] > 0) 
                l(new Error(p.errors[0]));
            else 
                if (p.oauthError) 
                    l(new Error(p.oauthErrorText));
                else {
                    gdpa(q, 200);
                    q.statusText = "OK";
                    var r = {}, s = "text/xml";
                    if (c == gdA.client.alt.JSON) 
                        s = "application/json";
                    r["Content-Type"] = s;
                    q.getResponseHeader = function(t){
                        return r[t]
                    };
                    if (p.oauthApprovalUrl) 
                        gdka(q, {
                            oauthApprovalUrl: p.oauthApprovalUrl
                        });
                    else 
                        if (p.text) 
                            gdka(q, p.text);
                    j(q, l)
                }
        };
        gadgets.io.makeRequest(b, o, k)
    };
    gdA.client.alt = {};
    gdA.client.alt.ATOM = "atom";
    gdA.client.alt.ATOM_IN_SCRIPT = "atom-in-script";
    gdA.client.alt.RSS = "rss";
    gdA.client.alt.RSS_IN_SCRIPT = "rss-in-script";
    gdA.client.alt.JSON = "json";
    gdA.client.alt.JSON_XD = "json-xd";
    gdA.client.alt.JSON_IN_SCRIPT = "json-in-script";
    var gdDe = function(a){
        this.gc = a
    };
    gdDe[gd].Aa = function(){
        throw Error("subclass responsibility");
    };
    gdDe[gd].fa = function(){
        throw Error("subclass responsibility");
    };
    gdDe[gd].ia = function(){
        throw Error("subclass responsibility");
    };
    gdDe[gd].Ba = function(){
        throw Error("subclass responsibility");
    };
    var gdEe = function(a){
        gdDe[gdq](this, a)
    };
    gdEe.c(gdDe);
    gdEe[gd].Aa = function(){
        return false
    };
    gdEe[gd].ia = function(a, b){
        b()
    };
    gdEe[gd].fa = function(){
        return true
    };
    gdEe[gd].Ba = function(){
    };
    var gdFe = function(a){
        gdDe[gdq](this, a)
    };
    gdFe.c(gdDe);
    gdFe[gd].Aa = function(){
        return this.gc.md().username || this.gc.md().password
    };
    gdFe[gd].ia = function(a, b, c){
        var d = this.gc.md(), e = d.username, g = d.password;
        if (!e || !g) 
            throw Error("need username and password in service for authentication");
        var h = "Email=" + gdba(e) + "&Passwd=" + gdba(g) + "&source=" + gdba(this.gc.applicationName) + "&service=" + gdba(this.gc.serviceName) + "&accountType=HOSTED_OR_GOOGLE";
        gdA.client.xmlHttpRequest.sendAsyncRequest("POST", this.Pk(), h, {
            "content-type": "application/x-www-form-urlencoded"
        }, this.Jk(b, c), c)
    };
    gdFe[gd].fa = function(){
        return !this.gc.md().username || this.lc
    };
    gdFe[gd].Ng = "/accounts/ClientLogin";
    gdFe[gd].Pk = function(){
        return gdA.runtime[gdt] != gdA.runtime.TYPE.UP && gdA.runtime[gdt] != gdA.runtime.TYPE.IG && gdA.runtime[gdt] != gdA.runtime.TYPE.OS ? this.gc.fl + "://" + this.gc.el + this.Ng : gdpe[gdn][gdWa] + "//" + gdpe[gdn].host + (gdpe[gdn][gdUa] ? ":" + gdpe[gdn][gdUa] : "") + this.Ng
    };
    gdFe[gd].Jk = function(a, b){
        var c = this;
        return function(d){
            var e = gdGe;
            if (d[gdRa] == gdA.client[gdRa].FORBIDDEN) {
                var g = Error("Login failed");
                gdh(g, e.LOGIN_FAILED);
                if (b) 
                    return b(g);
                else 
                    throw g;
            }
            if (d[gdRa] >= gdA.client[gdRa].NOT_OK) {
                var g = Error("Bad authentication response status: " + d[gdRa]);
                gdh(g, e.BAD_STATUS);
                if (b) 
                    return b(g);
                else 
                    throw g;
            }
            var h = d[gdKa];
            if (!h) {
                var g = Error("No authentication token in response");
                gdh(g, e.NO_TOKEN);
                if (b) 
                    return b(g);
                else 
                    throw g;
            }
            var i = h.match(/^Auth=(.*)/m);
            if (!i || !i[1]) {
                var g = Error("Malformed authentication token: " + h);
                gdh(g, e.MALFORMED_TOKEN);
                if (b) 
                    return b(g);
                else 
                    throw g;
            }
            c.lc = i[1];
            a[gdq](c)
        }
    };
    var gdGe = {
        BAD_STATUS: 0,
        LOGIN_FAILED: 1,
        NO_TOKEN: 2,
        MALFORMED_TOKEN: 3
    };
    gdFe[gd].Ba = function(a, b){
        if (this.lc) 
            b.Authorization = "GoogleLogin auth=" + this.lc
    };
    var gdHe = function(a, b, c){
        gdDe[gdq](this, a);
        this.Ak = b;
        this.Sl = c || "GoogleLogin"
    };
    gdHe.c(gdDe);
    gdHe[gd].Aa = function(){
        return true
    };
    gdHe[gd].ia = function(a, b, c){
        this.lc = gdTd(this.Ak);
        if (this.lc) 
            b();
        else 
            c && c(new Error("cookie (" + this.Ak + ") not available."))
    };
    gdHe[gd].fa = function(){
        return this.lc != null
    };
    gdHe[gd].Ba = function(a, b){
        if (this.lc) 
            b.Authorization = this.Sl + " auth=" + this.lc
    };
    var gdIe = function(a){
        gdDe[gdq](this, a)
    };
    gdIe.c(gdDe);
    gdIe[gd].Aa = function(a){
        return this.fa(a)
    };
    gdIe[gd].ia = function(a, b){
        b()
    };
    gdIe[gd].fa = function(a){
        a = this.Ej(a);
        return gdne.checkLogin(a)
    };
    gdIe[gd].Ba = function(a, b){
        a = this.Ej(a);
        var c = gdne.checkLogin(a);
        if (c) 
            b.Authorization = "AuthSub token=" + c
    };
    gdIe[gd].Ej = function(a){
        var b = a[gdo]("?");
        if (b > 0) 
            a = a[gds](0, b);
        var c = a[gdo]("#");
        if (c > 0) 
            a = a[gds](0, c);
        return a
    };
    var gdJe = function(a, b, c){
        gdDe[gdq](this, a);
        this.Fl = b;
        this.opt_params = c ||
        {}
    };
    gdJe.c(gdDe);
    gdJe[gd].Aa = function(){
        return true
    };
    gdJe[gd].ia = function(a, b){
        b()
    };
    gdJe[gd].fa = function(){
        return false
    };
    gdJe[gd].Ba = function(a, b){
        this.opt_params[gadgets.io.RequestParameters.AUTHORIZATION] = this.Fl;
        b[gdCe] = this.opt_params
    };
    var gdC = function(a, b){
        gdA.client.ob();
        this.serviceName = a;
        this.applicationName = b;
        this.Wl = (new Date)[gd9a]() + "-" + gdA.util.getRandomInt(100, 999);
        this.na = new this.we(this);
        this.Ya = {};
        this.Ya[gdA.client.alt.ATOM] = true;
        this.Yk = {
            "X-If-No-Redirect": "1"
        };
        this.Dk = null;
        this.te(false)
    }, gdKe;
    gdv("google.gdata.client.Service", gdC);
    gdC[gd].we = gdEe;
    gdC[gd].Kj = function(a){
        this.Dk = a
    };
    gdv("google.gdata.client.Service.prototype.setDeveloperKey", gdC[gd].Kj);
    gdC[gd].ue = function(a){
        return this.Ya[a]
    };
    gdv("google.gdata.client.Service.prototype.supportsAlt", gdC[gd].ue);
    gdC[gd].re = function(a, b){
        this.Ya[a] = b
    };
    gdv("google.gdata.client.Service.prototype.setAltSupport", gdC[gd].re);
    gdC[gd].$e = function(){
        return this.Xl
    };
    gdv("google.gdata.client.Service.prototype.isXd2Supported", gdC[gd].$e);
    gdC[gd].te = function(a){
        this.Xl = a
    };
    gdv("google.gdata.client.Service.prototype.setXd2Supported", gdC[gd].te);
    gdC[gd].pb = function(){
        return false
    };
    gdC[gd].wk = new gdue;
    gdC[gd].uk = new gdve;
    gdC[gd].vk = new gdAe;
    gdC[gd].rk = new gdBe;
    gdC[gd].Lk = function(){
        return gdpe[gdn][gdr]
    };
    gdC[gd].Rk = function(a, b){
        return gdA.runtime[gdt] != gdA.runtime.TYPE.UP && gdA.runtime[gdt] != gdA.runtime.TYPE.IG && gdA.runtime[gdt] != gdA.runtime.TYPE.OS ? this.Qi(a, b) : gdte(a, this.Lk()) ? this.Qi(a, b) : this.Kk(a, b)
    };
    gdC[gd].Qi = function(){
        return this.wk
    };
    gdC[gd].Kk = function(a, b){
        if (gdA.runtime[gdt] == gdA.runtime.TYPE.OS) 
            return this.rk;
        if (b == "GET" && !this.pb(a)) 
            return this.uk;
        if (this.$e()) 
            if (this.Wk()) 
                return this.vk;
            else {
                var c = "An image of the same domain is required on this page for authenticated reads and all writes.";
                throw Error(c);
            }
        else 
            throw Error("no suitable transport");
    };
    gdC[gd].Wk = function(){
        if (gdKe == gda) 
            if (gdA.runtime[gdt] == gdA.runtime.TYPE.UP) {
                var a = gdf.getElementsByTagName("img");
                for (var b = 0; b < a[gdj]; b++) {
                    var c = a[b];
                    if (gdEd(c.src, gdc[gdn][gdr])) {
                        gdKe = true;
                        return true
                    }
                }
                gdKe = false
            }
            else 
                gdKe = true;
        return gdKe
    };
    gdC[gd].Gj = function(a, b, c, d, e, g){
        this.ff(a, b, c, d, e, g, true)
    };
    gdC[gd].ff = function(a, b, c, d, e, g, h){
        this.pb(b) && this.na.Ba(b, d);
        var i = this.Rk(b, a), j = this.ue(i.xa(gdA.client.alt.JSON)) ? gdA.client.alt.JSON : this.ue(i.xa(gdA.client.alt.ATOM)) ? gdA.client.alt.ATOM : null;
        if (j) {
            var l = j == gdA.client.alt.JSON ? function(o, p, q){
                if (typeof o[gdKa] == "string") {
                    var r = o.getResponseHeader("Content-Type"), s = r && r[gdo]("xml") > 0 ? gdA.util.convertXmlTextToJavaScript(o[gdKa]) : gdA.util.convertJsonTextToJavaScript(o[gdKa]);
                    return p(s, q)
                }
                return p(o[gdKa], q)
            }
 : function(o, p, q){
                if (typeof o[gdKa] == "string") 
                    return p(gdA.util.convertXmlTextToJavaScript(o[gdKa]), q);
                return p(o[gdKa], q)
            };
            this.vl(i, a, b, j, c, d, l, e, g, h)
        }
        else {
            var k = i.xa(gdA.client.alt.JSON), m = i.xa(gdA.client.alt.ATOM), n = "";
            if (k) 
                n += k;
            if (m) {
                if (n) 
                    n += " or ";
                n += m
            }
            n = n ? ": " + n : ".";
            throw Error("service does not support alt required by transport" + n);
        }
    };
    gdC[gd].vl = function(a, b, c, d, e, g, h, i, j, l){
        var k = this, m = a.xa(d), n = gdba(this.applicationName + " GData-JavaScript/" + (gdc.GData_API_Version || "dev") + " " + this.Wl);
        a.Pa(b, c, m, e, g, this.Dk, n, this, (function(o, p){
            var q = 0;
            try {
                q = o[gdRa]
            } 
            catch (r) {
                q = gdA.client[gdRa].NOT_OK
            }
            if (q < gdA.client[gdRa].NOT_OK) 
                return h(o, i, p);
            else 
                if (l && q == gdA.client[gdRa].PRECONDITION_FAILED) {
                    var s = o.getResponseHeader("X-Redirect-Location");
                    return k.ff(b, s, e, g, i, p, false)
                }
                else 
                    if (l && q == gdA.client[gdRa].INTERNAL_SERVER_ERROR) 
                        return k.ff(b, c, e, g, i, p, false);
                    else 
                        if (q == gdA.client[gdRa].BAD_REQUEST && o[gdKa] == "Invalid Feed Type") {
                            this.re(gdA.client.alt.JSON, false);
                            return k.Gj(b, c, e, g, function(){
                                k.re(gdA.client.alt.JSON, true);
                                i[gd1a](this, arguments)
                            }, p)
                        }
                        else {
                            var t = o[gdxa];
                            if (q == gdA.client[gdRa].UNAUTHORIZED && o[gdxa] == "OK") 
                                t = "Authorization required";
                            var u = Error(t);
                            u.cause = o;
                            if (o.responseHeaders) 
                                u.statusTextContentType = o.responseHeaders["Content-Type"];
                            if (p) 
                                return p(u)
                        }
        }).bind(this), j)
    };
    gdC[gd].H = function(a, b, c, d, e){
        var g = typeof a == "string" ? a : a.ea();
        return this.Oi(g, b, c, {
            feedClass: d,
            authenticationRequired: e
        })
    };
    gdv("google.gdata.client.Service.prototype.getFeed", gdC[gd].H);
    gdC[gd].T = function(a, b, c, d, e){
        return this.Oi(a, b, c, {
            entryClass: d,
            authenticationRequired: e
        })
    };
    gdv("google.gdata.client.Service.prototype.getEntry", gdC[gd].T);
    gdC[gd].Oi = function(a, b, c, d){
        if ((d && d.authenticationRequired || this.pb(a)) && !this.na.fa(a)) {
            var e = this;
            this.na.ia(a, function(){
                e.cc(a, b, c, d)
            }, c)
        }
        else 
            this.cc(a, b, c, d)
    };
    gdC[gd].cc = function(a, b, c, d){
        return this.qe("GET", a, "", b, c, d)
    };
    gdC[gd].dc = function(a, b, c, d, e){
        if (this.pb(a) && !this.na.fa(a)) {
            var g = this;
            this.na.ia(a, function(){
                g.vj(a, b, c, d, e)
            }, d)
        }
        else 
            this.vj(a, b, c, d, e)
    };
    gdv("google.gdata.client.Service.prototype.insertEntry", gdC[gd].dc);
    gdC[gd].vj = function(a, b, c, d, e){
        if (!b.Yb) 
            b.Yb = "http://www.w3.org/2005/Atom";
        var g = gdA.util.convertEntryToAtom(b);
        if (!e && b[gdl] !== gde) 
            e = b[gdl];
        this.qe("POST", a, g, c, d, {
            entryClass: e
        })
    };
    gdC[gd].mc = function(a, b, c, d, e){
        if (this.pb(a) && !this.na.fa(a)) {
            var g = this;
            this.na.ia(a, function(){
                g.ok(a, b, c, d, e)
            }, d)
        }
        else 
            this.ok(a, b, c, d, e)
    };
    gdv("google.gdata.client.Service.prototype.updateEntry", gdC[gd].mc);
    gdC[gd].ok = function(a, b, c, d, e){
        if (!e && b[gdl] !== gde) 
            e = b[gdl];
        var g = gdA.util.convertEntryToAtom(b);
        this.qe("PUT", a, g, c, d, {
            entryClass: e
        })
    };
    gdC[gd].Zb = function(a, b, c){
        if (this.pb(a) && !this.na.fa(a)) {
            var d = this;
            this.na.ia(a, function(){
                d.Sg(a, b, c)
            }, c)
        }
        else 
            this.Sg(a, b, c)
    };
    gdv("google.gdata.client.Service.prototype.deleteEntry", gdC[gd].Zb);
    gdC[gd].Sg = function(a, b, c){
        this.qe("DELETE", a, "", b, c)
    };
    gdC[gd].qe = function(a, b, c, d, e, g){
        var h = gdA.util.copy(this.Yk);
        if (c) {
            h["Content-Length"] = c[gdj];
            h["Content-Type"] = gdA.mimeType.ATOM + "; charset=UTF-8"
        }
        else 
            h["Content-Length"] = 0;
        if ((a == "PUT" || a == "DELETE" && !gdA.runtime.isIe && !gdA.runtime.isSafari) && gdA.runtime[gdt] != gdA.runtime.TYPE.OS) {
            h["X-HTTP-Method-Override"] = a;
            a = "POST"
        }
        else 
            delete h["X-HTTP-Method-Override"];
        var i = this;
        this.Gj(a, b, c, h, function(j){
            if (j && j.feed) {
                var l = g && g.feedClass ||
                i.feedClass;
                j.feed.$service_ = i;
                if (l) 
                    j.feed = gdA.util.mutateTo(j.feed, l);
                var k = j.feed.entry;
                if (k) 
                    for (var m = 0; m < k[gdj]; m++) 
                        k[m].$service_ = i
            }
            else 
                if (j && j.entry) {
                    var n = g && g.entryClass || i.entryClass;
                    if (n) 
                        j.entry = gdA.util.mutateTo(j.entry, n);
                    j.entry.$service_ = i
                }
            d[gd1a](this, arguments)
        }, e)
    };
    gdC[gd].Pj = function(a){
        for (var b in a) 
            this.Yk[b] = a[b]
    };
    gdv("google.gdata.client.Service.prototype.setHeaders", gdC[gd].Pj);
    var gdD = function(a, b){
        gdC[gdq](this, a, b);
        this.Dl = null;
        this.ll = null;
        this.Ya[gdA.client.alt.ATOM] = true;
        this.Ya[gdA.client.alt.ATOM_IN_SCRIPT] = true;
        this.Ya[gdA.client.alt.RSS] = true;
        this.Ya[gdA.client.alt.RSS_IN_SCRIPT] = true;
        this.Ya[gdA.client.alt.JSON] = true;
        this.Ya[gdA.client.alt.JSON_IN_SCRIPT] = true;
        this.Ya[gdA.client.alt.JSON_XD] = true;
        this.te(true)
    };
    gdv("google.gdata.client.GoogleService", gdD);
    gdD.c(gdC);
    gdD[gd].we = gdIe;
    gdD[gd].fl = "https";
    gdD[gd].el = "www.google.com";
    gdD[gd].md = function(){
        return {
            username: this.Dl,
            password: this.ll
        }
    };
    gdv("google.gdata.client.GoogleService.prototype.getUserCredentials", gdD[gd].md);
    gdD[gd].lk = function(a, b){
        this.Dl = a;
        this.ll = b;
        if (this.na[gdl] != gdFe) 
            this.na = new gdFe(this)
    };
    gdv("google.gdata.client.GoogleService.prototype.setUserCredentials", gdD[gd].lk);
    gdD[gd].Hj = function(a, b){
        this.na = new gdHe(this, a, b)
    };
    gdv("google.gdata.client.GoogleService.prototype.setAuthenticationCookie", gdD[gd].Hj);
    gdD[gd].Df = function(a, b){
        this.na = new gdJe(this, a, b)
    };
    gdv("google.gdata.client.GoogleService.prototype.setGadgetsAuthentication", gdD[gd].Df);
    gdD[gd].qk = function(a, b){
        b = b ||
        {};
        b[gadgets.io.RequestParameters.OAUTH_SERVICE_NAME] = a;
        this.Df(gadgets.io.AuthorizationType.OAUTH, b)
    };
    gdv("google.gdata.client.GoogleService.prototype.useOAuth", gdD[gd].qk);
    gdD[gd].pb = function(a){
        return this.na.Aa(a)
    };
    var gdE = function(a){
        this.feedUri = a;
        this.Bj = {};
        this.Aj = gdA.util.copy(this.sk)
    };
    gdv("google.gdata.client.Query", gdE);
    gdE[gd].sk = {
        alt: {
            defaultValue: gdA.client.alt.ATOM
        }
    };
    gdE[gd].S = function(a, b){
        this.Aj[a] = b
    };
    gdv("google.gdata.client.Query.prototype.setParamDef", gdE[gd].S);
    gdE[gd].f = function(a, b){
        this.Bj[a] = b
    };
    gdv("google.gdata.client.Query.prototype.setParam", gdE[gd].f);
    gdE[gd].Rc = function(){
        var a = [];
        for (var b in this.Bj) {
            var c = this.e(b);
            if (c !== null) {
                var d = this.Aj[b];
                if (d !== gda && d.decorator) 
                    c = d.decorator(c);
                else 
                    if (c instanceof gdqe) 
                        c = gdre(c);
                a[gdi](b + "=" + gdba(c))
            }
        }
        var e = a[gd$a]("&");
        return e[gdj] ? "?" + e : ""
    };
    gdv("google.gdata.client.Query.prototype.getPath", gdE[gd].Rc);
    gdE[gd].ea = function(){
        return this.feedUri + this.Rc()
    };
    gdv("google.gdata.client.Query.prototype.getUri", gdE[gd].ea);
    gdE[gd].e = function(a){
        var b = this.Bj[a], c = this.Aj[a];
        if (b !== gda && (c === gda || b !== c.defaultValue)) 
            return b;
        return null
    };
    gdv("google.gdata.client.Query.prototype.getParam", gdE[gd].e);
    gdA.app = {};
    gdA.app.namespace = {};
    gdA.app.namespace.APP = "http://purl.org/atom/app#";
    var gdLe = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.app.Draft", gdLe);
    gdLe[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.app.Draft.prototype.getValue", gdLe[gd].b);
    gdLe[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.app.Draft.prototype.setValue", gdLe[gd].a);
    gdv("google.gdata.app.Draft.VALUE_NO", "no");
    gdv("google.gdata.app.Draft.VALUE_YES", "yes");
    var gdMe = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            this.$t = this.$t
    };
    gdv("google.gdata.app.Edited", gdMe);
    gdMe[gd].b = function(){
        return this.$t === gda ? gda : gdB(this.$t)
    };
    gdv("google.gdata.app.Edited.prototype.getValue", gdMe[gd].b);
    gdMe[gd].a = function(a){
        this.$t = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.app.Edited.prototype.setValue", gdMe[gd].a);
    var gdNe = function(a){
        if (a) 
            this.uf(a.draft);
        else 
            this.app$draft = gdA.util.mutateTo(this.app$draft, gdLe)
    };
    gdv("google.gdata.app.Control", gdNe);
    gdNe[gd].Ah = function(){
        return this.app$draft
    };
    gdv("google.gdata.app.Control.prototype.getDraft", gdNe[gd].Ah);
    gdNe[gd].uf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdLe(a);
        this.app$draft = a
    };
    gdv("google.gdata.app.Control.prototype.setDraft", gdNe[gd].uf);
    gdv("google.gdata.Control", gdNe);
    gdv("google.gdata.Draft", gdLe);
    gdv("google.gdata.Edited", gdMe);
    gdA.atom = {};
    gdA.atom.namespace = {};
    gdA.atom.namespace.ATOM = "http://www.w3.org/2005/Atom";
    gdA.atom.namespace.XML = "http://www.w3.org/XML/1998/namespace";
    var gdF = function(a){
        if (a) {
            gdua(this, a[gd7a]);
            this.xml$lang = a.labelLang;
            gdla(this, a.scheme);
            this.term = a.term
        }
        else {
            gdua(this, this[gd7a]);
            this.xml$lang = this.xml$lang;
            gdla(this, this.scheme);
            this.term = this.term
        }
    };
    gdv("google.gdata.atom.Category", gdF);
    gdF[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.atom.Category.prototype.getLabel", gdF[gd].u);
    gdF[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.atom.Category.prototype.setLabel", gdF[gd].A);
    gdF[gd].Vh = function(){
        return this.xml$lang
    };
    gdv("google.gdata.atom.Category.prototype.getLabelLang", gdF[gd].Vh);
    gdF[gd].Tj = function(a){
        this.xml$lang = a
    };
    gdv("google.gdata.atom.Category.prototype.setLabelLang", gdF[gd].Tj);
    gdF[gd].Ed = function(){
        return this.scheme
    };
    gdv("google.gdata.atom.Category.prototype.getScheme", gdF[gd].Ed);
    gdF[gd].jc = function(a){
        gdla(this, a)
    };
    gdv("google.gdata.atom.Category.prototype.setScheme", gdF[gd].jc);
    gdF[gd].dj = function(){
        return this.term
    };
    gdv("google.gdata.atom.Category.prototype.getTerm", gdF[gd].dj);
    gdF[gd].ik = function(a){
        this.term = a
    };
    gdv("google.gdata.atom.Category.prototype.setTerm", gdF[gd].ik);
    var gdOe = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.atom.Email", gdOe);
    gdOe[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Email.prototype.getValue", gdOe[gd].b);
    gdOe[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Email.prototype.setValue", gdOe[gd].a);
    var gdPe = function(a){
        if (a) {
            this.$t = a[gd4a];
            this.uri = a.uri;
            this.version = a[gdAa]
        }
        else {
            this.$t = this.$t;
            this.uri = this.uri;
            this.version = this[gdAa]
        }
    };
    gdv("google.gdata.atom.Generator", gdPe);
    gdPe[gd].$ = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Generator.prototype.getName", gdPe[gd].$);
    gdPe[gd].ga = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Generator.prototype.setName", gdPe[gd].ga);
    gdPe[gd].ea = function(){
        return this.uri
    };
    gdv("google.gdata.atom.Generator.prototype.getUri", gdPe[gd].ea);
    gdPe[gd].Ca = function(a){
        this.uri = a
    };
    gdv("google.gdata.atom.Generator.prototype.setUri", gdPe[gd].Ca);
    gdPe[gd].mj = function(){
        return this[gdAa]
    };
    gdv("google.gdata.atom.Generator.prototype.getVersion", gdPe[gd].mj);
    gdPe[gd].mk = function(a){
        this.version = a
    };
    gdv("google.gdata.atom.Generator.prototype.setVersion", gdPe[gd].mk);
    var gdQe = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.atom.Id", gdQe);
    gdQe[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Id.prototype.getValue", gdQe[gd].b);
    gdQe[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Id.prototype.setValue", gdQe[gd].a);
    var gdG = function(a){
        if (a) {
            gdra(this, a[gdr]);
            this.hreflang = a.hrefLang;
            this.Lf(a[gdj]);
            this.rel = a.rel;
            gdia(this, a[gdza]);
            this.xml$lang = a.titleLang;
            gdh(this, a[gdt])
        }
        else {
            gdra(this, this[gdr]);
            this.hreflang = this.hreflang;
            gdha(this, this[gdj]);
            this.rel = this.rel;
            gdia(this, this[gdza]);
            this.xml$lang = this.xml$lang;
            gdh(this, this[gdt])
        }
    };
    gdv("google.gdata.atom.Link", gdG);
    gdG[gd].J = function(){
        return this[gdr]
    };
    gdv("google.gdata.atom.Link.prototype.getHref", gdG[gd].J);
    gdG[gd].D = function(a){
        gdra(this, a)
    };
    gdv("google.gdata.atom.Link.prototype.setHref", gdG[gd].D);
    gdG[gd].Ph = function(){
        return this.hreflang
    };
    gdv("google.gdata.atom.Link.prototype.getHrefLang", gdG[gd].Ph);
    gdG[gd].Qj = function(a){
        this.hreflang = a
    };
    gdv("google.gdata.atom.Link.prototype.setHrefLang", gdG[gd].Qj);
    gdG[gd].Xh = function(){
        return this[gdj] === gda ? gda : gdd(this[gdj])
    };
    gdv("google.gdata.atom.Link.prototype.getLength", gdG[gd].Xh);
    gdG[gd].Lf = function(a){
        gdha(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.atom.Link.prototype.setLength", gdG[gd].Lf);
    gdG[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.atom.Link.prototype.getRel", gdG[gd].i);
    gdG[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.atom.Link.prototype.setRel", gdG[gd].h);
    var gdRe = "alternate";
    gdv("google.gdata.atom.Link.REL_ALTERNATE", gdRe);
    gdv("google.gdata.atom.Link.REL_ENCLOSURE", "enclosure");
    gdv("google.gdata.atom.Link.REL_ENTRY_EDIT", "edit");
    gdv("google.gdata.atom.Link.REL_MEDIA_EDIT", "edit-media");
    gdv("google.gdata.atom.Link.REL_NEXT", "next");
    var gdSe = "previous";
    gdv("google.gdata.atom.Link.REL_PREVIOUS", gdSe);
    gdv("google.gdata.atom.Link.REL_RELATED", "related");
    gdv("google.gdata.atom.Link.REL_SELF", "self");
    gdv("google.gdata.atom.Link.REL_VIA", "via");
    gdG[gd].Ma = function(){
        return this[gdza]
    };
    gdv("google.gdata.atom.Link.prototype.getTitle", gdG[gd].Ma);
    gdG[gd].ka = function(a){
        gdia(this, a)
    };
    gdv("google.gdata.atom.Link.prototype.setTitle", gdG[gd].ka);
    gdG[gd].gj = function(){
        return this.xml$lang
    };
    gdv("google.gdata.atom.Link.prototype.getTitleLang", gdG[gd].gj);
    gdG[gd].jk = function(a){
        this.xml$lang = a
    };
    gdv("google.gdata.atom.Link.prototype.setTitleLang", gdG[gd].jk);
    gdG[gd].U = function(){
        return this[gdt]
    };
    gdv("google.gdata.atom.Link.prototype.getType", gdG[gd].U);
    gdG[gd].G = function(a){
        gdh(this, a)
    };
    gdv("google.gdata.atom.Link.prototype.setType", gdG[gd].G);
    var gdH = "application/atom+xml";
    gdv("google.gdata.atom.Link.TYPE_ATOM", gdH);
    var gdTe = "text/html";
    gdv("google.gdata.atom.Link.TYPE_HTML", gdTe);
    var gdUe = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.atom.Logo", gdUe);
    gdUe[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Logo.prototype.getValue", gdUe[gd].b);
    gdUe[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Logo.prototype.setValue", gdUe[gd].a);
    var gdVe = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.atom.Name", gdVe);
    gdVe[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Name.prototype.getValue", gdVe[gd].b);
    gdVe[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Name.prototype.setValue", gdVe[gd].a);
    var gdWe = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            this.$t = this.$t
    };
    gdv("google.gdata.atom.Published", gdWe);
    gdWe[gd].b = function(){
        return this.$t === gda ? gda : gdB(this.$t)
    };
    gdv("google.gdata.atom.Published.prototype.getValue", gdWe[gd].b);
    gdWe[gd].a = function(a){
        this.$t = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.atom.Published.prototype.setValue", gdWe[gd].a);
    var gdI = function(a){
        if (a) {
            this.xml$lang = a.lang;
            this.$t = a.text;
            gdh(this, a[gdt]);
            this.src = a.uri
        }
        else {
            this.xml$lang = this.xml$lang;
            this.$t = this.$t;
            gdh(this, this[gdt]);
            this.src = this.src
        }
    };
    gdv("google.gdata.atom.Text", gdI);
    gdI[gd].Wh = function(){
        return this.xml$lang
    };
    gdv("google.gdata.atom.Text.prototype.getLang", gdI[gd].Wh);
    gdI[gd].Uj = function(a){
        this.xml$lang = a
    };
    gdv("google.gdata.atom.Text.prototype.setLang", gdI[gd].Uj);
    gdI[gd].ej = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Text.prototype.getText", gdI[gd].ej);
    gdI[gd].wg = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Text.prototype.setText", gdI[gd].wg);
    gdI[gd].U = function(){
        return this[gdt]
    };
    gdv("google.gdata.atom.Text.prototype.getType", gdI[gd].U);
    gdI[gd].G = function(a){
        gdh(this, a)
    };
    gdv("google.gdata.atom.Text.prototype.setType", gdI[gd].G);
    gdI[gd].ea = function(){
        return this.src
    };
    gdv("google.gdata.atom.Text.prototype.getUri", gdI[gd].ea);
    gdI[gd].Ca = function(a){
        this.src = a
    };
    gdv("google.gdata.atom.Text.prototype.setUri", gdI[gd].Ca);
    var gdXe = function(a, b){
        var c = new gdI;
        c.wg(a);
        c.G(b || "text");
        return c
    };
    gdv("google.gdata.atom.Text.create", gdXe);
    var gdYe = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            this.$t = this.$t
    };
    gdv("google.gdata.atom.Updated", gdYe);
    gdYe[gd].b = function(){
        return this.$t === gda ? gda : gdB(this.$t)
    };
    gdv("google.gdata.atom.Updated.prototype.getValue", gdYe[gd].b);
    gdYe[gd].a = function(a){
        this.$t = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.atom.Updated.prototype.setValue", gdYe[gd].a);
    var gdZe = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.atom.Uri", gdZe);
    gdZe[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.atom.Uri.prototype.getValue", gdZe[gd].b);
    gdZe[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.atom.Uri.prototype.setValue", gdZe[gd].a);
    var gd_e = function(a){
        if (!gdu(this.Ig)) 
            this.Ig = gdVe;
        if (!gdu(this.Lg)) 
            this.Lg = gdZe;
        if (a) {
            this.hc(a.email);
            this.ga(a[gd4a]);
            this.xml$lang = a.nameLang;
            this.Ca(a.uri)
        }
        else {
            this.email = gdA.util.mutateTo(this.email, gdOe);
            gdta(this, gdA.util.mutateTo(this[gd4a], this.Ig));
            this.xml$lang = this.xml$lang;
            this.uri = gdA.util.mutateTo(this.uri, this.Lg)
        }
    };
    gdv("google.gdata.atom.Person", gd_e);
    gd_e[gd].Hc = function(){
        return this.email
    };
    gdv("google.gdata.atom.Person.prototype.getEmail", gd_e[gd].Hc);
    gd_e[gd].hc = function(a){
        if (a &&
        a[gdl] === gde) 
            a = new gdOe(a);
        this.email = a
    };
    gdv("google.gdata.atom.Person.prototype.setEmail", gd_e[gd].hc);
    gd_e[gd].$ = function(){
        return this[gd4a]
    };
    gdv("google.gdata.atom.Person.prototype.getName", gd_e[gd].$);
    gd_e[gd].ga = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Ig(a);
        gdta(this, a)
    };
    gdv("google.gdata.atom.Person.prototype.setName", gd_e[gd].ga);
    gd_e[gd].di = function(){
        return this.xml$lang
    };
    gdv("google.gdata.atom.Person.prototype.getNameLang", gd_e[gd].di);
    gd_e[gd].Yj = function(a){
        this.xml$lang = a
    };
    gdv("google.gdata.atom.Person.prototype.setNameLang", gd_e[gd].Yj);
    gd_e[gd].ea = function(){
        return this.uri
    };
    gdv("google.gdata.atom.Person.prototype.getUri", gd_e[gd].ea);
    gd_e[gd].Ca = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Lg(a);
        this.uri = a
    };
    gdv("google.gdata.atom.Person.prototype.setUri", gd_e[gd].Ca);
    var gdJ = function(a){
        if (!gdu(this.nc)) 
            this.nc = gd_e;
        if (!gdu(this.oc)) 
            this.oc = gdF;
        if (!gdu(this.Fg)) 
            this.Fg = gdI;
        if (!gdu(this.pc)) 
            this.pc = gd_e;
        if (!gdu(this.j)) 
            this.j = gdG;
        if (!gdu(this.sc)) 
            this.sc = gdI;
        if (!gdu(this.Kg)) 
            this.Kg = gdI;
        if (!gdu(this.tc)) 
            this.tc = gdI;
        if (a) {
            this.ub(a.authors);
            this.vb(a.categories);
            this.pf(a.content);
            this.xb(a.contributors);
            this.ca(a.id);
            this.Db(a.links);
            this.dg(a.published);
            this.Pb(a.rights);
            this.tg(a.summary);
            this.ka(a[gdza]);
            this.Wb(a.updated)
        }
        else {
            if (this.author) {
                var b = this.author;
                for (var c = 0; c < b[gdj]; c++) 
                    this.author[c] = gdA.util.mutateTo(b[c], this.nc)
            }
            else 
                this.author = [];
            if (this.category) {
                var b = this.category;
                for (var c = 0; c < b[gdj]; c++) 
                    this.category[c] = gdA.util.mutateTo(b[c], this.oc)
            }
            else 
                this.category = [];
            this.content = gdA.util.mutateTo(this.content, this.Fg);
            if (this.contributor) {
                var b = this.contributor;
                for (var c = 0; c < b[gdj]; c++) 
                    this.contributor[c] = gdA.util.mutateTo(b[c], this.pc)
            }
            else 
                this.contributor = [];
            this.id = gdA.util.mutateTo(this.id, gdQe);
            if (this.link) {
                var b = this.link;
                for (var c = 0; c < b[gdj]; c++) 
                    this.link[c] = gdA.util.mutateTo(b[c], this.j)
            }
            else 
                this.link = [];
            this.published = gdA.util.mutateTo(this.published, gdWe);
            this.rights = gdA.util.mutateTo(this.rights, this.sc);
            this.summary = gdA.util.mutateTo(this.summary, this.Kg);
            gdia(this, gdA.util.mutateTo(this[gdza], this.tc));
            this.updated = gdA.util.mutateTo(this.updated, gdYe)
        }
    };
    gdv("google.gdata.atom.Entry", gdJ);
    gdJ[gd].Yb = gdA.atom.namespace.ATOM;
    gdv("google.gdata.atom.Entry.prototype.xmlns", gdJ[gd].Yb);
    gdJ[gd].Ad = gdA.atom.namespace.XML;
    gdv("google.gdata.atom.Entry.prototype.xmlns$xml", gdJ[gd].Ad);
    gdJ[gd].yc = function(){
        return this.author
    };
    gdv("google.gdata.atom.Entry.prototype.getAuthors", gdJ[gd].yc);
    gdJ[gd].ub = function(a){
        this.author = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.db(a[b])
    };
    gdv("google.gdata.atom.Entry.prototype.setAuthors", gdJ[gd].ub);
    gdJ[gd].db = function(a){
        if (a[gdl] === gde) 
            a = new this.nc(a);
        this.author[gdi](a)
    };
    gdv("google.gdata.atom.Entry.prototype.addAuthor", gdJ[gd].db);
    gdJ[gd].zc = function(){
        return this.category
    };
    gdv("google.gdata.atom.Entry.prototype.getCategories", gdJ[gd].zc);
    gdJ[gd].vb = function(a){
        this.category = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.eb(a[b])
    };
    gdv("google.gdata.atom.Entry.prototype.setCategories", gdJ[gd].vb);
    gdJ[gd].eb = function(a){
        if (a[gdl] === gde) 
            a = new this.oc(a);
        this.category[gdi](a)
    };
    gdv("google.gdata.atom.Entry.prototype.addCategory", gdJ[gd].eb);
    gdJ[gd].uh = function(){
        return this.content
    };
    gdv("google.gdata.atom.Entry.prototype.getContent", gdJ[gd].uh);
    gdJ[gd].pf = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Fg(a);
        this.content = a
    };
    gdv("google.gdata.atom.Entry.prototype.setContent", gdJ[gd].pf);
    gdJ[gd].Dc = function(){
        return this.contributor
    };
    gdv("google.gdata.atom.Entry.prototype.getContributors", gdJ[gd].Dc);
    gdJ[gd].xb = function(a){
        this.contributor = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.fb(a[b])
    };
    gdv("google.gdata.atom.Entry.prototype.setContributors", gdJ[gd].xb);
    gdJ[gd].fb = function(a){
        if (a[gdl] === gde) 
            a = new this.pc(a);
        this.contributor[gdi](a)
    };
    gdv("google.gdata.atom.Entry.prototype.addContributor", gdJ[gd].fb);
    gdJ[gd].ja = function(){
        return this.id
    };
    gdv("google.gdata.atom.Entry.prototype.getId", gdJ[gd].ja);
    gdJ[gd].ca = function(a){
        if (a && a[gdl] === gde) 
            a = new gdQe(a);
        this.id = a
    };
    gdv("google.gdata.atom.Entry.prototype.setId", gdJ[gd].ca);
    gdJ[gd].Nc = function(){
        return this.link
    };
    gdv("google.gdata.atom.Entry.prototype.getLinks", gdJ[gd].Nc);
    gdJ[gd].Db = function(a){
        this.link = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.gb(a[b])
    };
    gdv("google.gdata.atom.Entry.prototype.setLinks", gdJ[gd].Db);
    gdJ[gd].gb = function(a){
        if (a[gdl] === gde) 
            a = new this.j(a);
        this.link[gdi](a)
    };
    gdv("google.gdata.atom.Entry.prototype.addLink", gdJ[gd].gb);
    gdJ[gd].Ai = function(){
        return this.published
    };
    gdv("google.gdata.atom.Entry.prototype.getPublished", gdJ[gd].Ai);
    gdJ[gd].dg = function(a){
        if (a && a[gdl] === gde) 
            a = new gdWe(a);
        this.published = a
    };
    gdv("google.gdata.atom.Entry.prototype.setPublished", gdJ[gd].dg);
    gdJ[gd].ad = function(){
        return this.rights
    };
    gdv("google.gdata.atom.Entry.prototype.getRights", gdJ[gd].ad);
    gdJ[gd].Pb = function(a){
        if (a && a[gdl] === gde) 
            a = new this.sc(a);
        this.rights = a
    };
    gdv("google.gdata.atom.Entry.prototype.setRights", gdJ[gd].Pb);
    gdJ[gd].aj = function(){
        return this.summary
    };
    gdv("google.gdata.atom.Entry.prototype.getSummary", gdJ[gd].aj);
    gdJ[gd].tg = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Kg(a);
        this.summary = a
    };
    gdv("google.gdata.atom.Entry.prototype.setSummary", gdJ[gd].tg);
    gdJ[gd].Ma = function(){
        return this[gdza]
    };
    gdv("google.gdata.atom.Entry.prototype.getTitle", gdJ[gd].Ma);
    gdJ[gd].ka = function(a){
        if (a && a[gdl] === gde) 
            a = new this.tc(a);
        gdia(this, a)
    };
    gdv("google.gdata.atom.Entry.prototype.setTitle", gdJ[gd].ka);
    gdJ[gd].ld = function(){
        return this.updated
    };
    gdv("google.gdata.atom.Entry.prototype.getUpdated", gdJ[gd].ld);
    gdJ[gd].Wb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdYe(a);
        this.updated = a
    };
    gdv("google.gdata.atom.Entry.prototype.setUpdated", gdJ[gd].Wb);
    var gdK = function(a){
        if (!gdu(this.nc)) 
            this.nc = gd_e;
        if (!gdu(this.oc)) 
            this.oc = gdF;
        if (!gdu(this.pc)) 
            this.pc = gd_e;
        if (!gdu(this.m)) 
            this.m = gdJ;
        if (!gdu(this.Hg)) 
            this.Hg = gdPe;
        if (!gdu(this.j)) 
            this.j = gdG;
        if (!gdu(this.sc)) 
            this.sc = gdI;
        if (!gdu(this.Jg)) 
            this.Jg = gdI;
        if (!gdu(this.tc)) 
            this.tc = gdI;
        if (a) {
            this.ub(a.authors);
            this.xml$base = a.base;
            this.vb(a.categories);
            this.xb(a.contributors);
            this.yf(a.entries);
            this.Ef(a.generator);
            this.ca(a.id);
            this.Db(a.links);
            this.Nf(a.logo);
            this.Pb(a.rights);
            this.sg(a.subTitle);
            this.ka(a[gdza]);
            this.Wb(a.updated)
        }
        else {
            if (this.author) {
                var b = this.author;
                for (var c = 0; c < b[gdj]; c++) 
                    this.author[c] = gdA.util.mutateTo(b[c], this.nc)
            }
            else 
                this.author = [];
            this.xml$base = this.xml$base;
            if (this.category) {
                var b = this.category;
                for (var c = 0; c < b[gdj]; c++) 
                    this.category[c] = gdA.util.mutateTo(b[c], this.oc)
            }
            else 
                this.category = [];
            if (this.contributor) {
                var b = this.contributor;
                for (var c = 0; c < b[gdj]; c++) 
                    this.contributor[c] = gdA.util.mutateTo(b[c], this.pc)
            }
            else 
                this.contributor = [];
            if (this.entry) {
                var b = this.entry;
                for (var c = 0; c <
                b[gdj]; c++) 
                    this.entry[c] = gdA.util.mutateTo(b[c], this.m)
            }
            else 
                this.entry = [];
            this.generator = gdA.util.mutateTo(this.generator, this.Hg);
            this.id = gdA.util.mutateTo(this.id, gdQe);
            if (this.link) {
                var b = this.link;
                for (var c = 0; c < b[gdj]; c++) 
                    this.link[c] = gdA.util.mutateTo(b[c], this.j)
            }
            else 
                this.link = [];
            this.logo = gdA.util.mutateTo(this.logo, gdUe);
            this.rights = gdA.util.mutateTo(this.rights, this.sc);
            this.subtitle = gdA.util.mutateTo(this.subtitle, this.Jg);
            gdia(this, gdA.util.mutateTo(this[gdza], this.tc));
            this.updated = gdA.util.mutateTo(this.updated, gdYe)
        }
    };
    gdv("google.gdata.atom.Feed", gdK);
    gdK[gd].Yb = gdA.atom.namespace.ATOM;
    gdv("google.gdata.atom.Feed.prototype.xmlns", gdK[gd].Yb);
    gdK[gd].Ad = gdA.atom.namespace.XML;
    gdv("google.gdata.atom.Feed.prototype.xmlns$xml", gdK[gd].Ad);
    gdK[gd].yc = function(){
        return this.author
    };
    gdv("google.gdata.atom.Feed.prototype.getAuthors", gdK[gd].yc);
    gdK[gd].ub = function(a){
        this.author = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.db(a[b])
    };
    gdv("google.gdata.atom.Feed.prototype.setAuthors", gdK[gd].ub);
    gdK[gd].db = function(a){
        if (a[gdl] === gde) 
            a = new this.nc(a);
        this.author[gdi](a)
    };
    gdv("google.gdata.atom.Feed.prototype.addAuthor", gdK[gd].db);
    gdK[gd].fh = function(){
        return this.xml$base
    };
    gdv("google.gdata.atom.Feed.prototype.getBase", gdK[gd].fh);
    gdK[gd].Ij = function(a){
        this.xml$base = a
    };
    gdv("google.gdata.atom.Feed.prototype.setBase", gdK[gd].Ij);
    gdK[gd].zc = function(){
        return this.category
    };
    gdv("google.gdata.atom.Feed.prototype.getCategories", gdK[gd].zc);
    gdK[gd].vb = function(a){
        this.category = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.eb(a[b])
    };
    gdv("google.gdata.atom.Feed.prototype.setCategories", gdK[gd].vb);
    gdK[gd].eb = function(a){
        if (a[gdl] === gde) 
            a = new this.oc(a);
        this.category[gdi](a)
    };
    gdv("google.gdata.atom.Feed.prototype.addCategory", gdK[gd].eb);
    gdK[gd].Dc = function(){
        return this.contributor
    };
    gdv("google.gdata.atom.Feed.prototype.getContributors", gdK[gd].Dc);
    gdK[gd].xb = function(a){
        this.contributor = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.fb(a[b])
    };
    gdv("google.gdata.atom.Feed.prototype.setContributors", gdK[gd].xb);
    gdK[gd].fb = function(a){
        if (a[gdl] === gde) 
            a = new this.pc(a);
        this.contributor[gdi](a)
    };
    gdv("google.gdata.atom.Feed.prototype.addContributor", gdK[gd].fb);
    gdK[gd].Eh = function(){
        return this.entry
    };
    gdv("google.gdata.atom.Feed.prototype.getEntries", gdK[gd].Eh);
    gdK[gd].yf = function(a){
        this.entry = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ye(a[b])
    };
    gdv("google.gdata.atom.Feed.prototype.setEntries", gdK[gd].yf);
    gdK[gd].ye = function(a){
        if (a[gdl] === gde) 
            a = new this.m(a);
        this.entry[gdi](a)
    };
    gdv("google.gdata.atom.Feed.prototype.addEntry", gdK[gd].ye);
    gdK[gd].Lh = function(){
        return this.generator
    };
    gdv("google.gdata.atom.Feed.prototype.getGenerator", gdK[gd].Lh);
    gdK[gd].Ef = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Hg(a);
        this.generator = a
    };
    gdv("google.gdata.atom.Feed.prototype.setGenerator", gdK[gd].Ef);
    gdK[gd].ja = function(){
        return this.id
    };
    gdv("google.gdata.atom.Feed.prototype.getId", gdK[gd].ja);
    gdK[gd].ca = function(a){
        if (a && a[gdl] === gde) 
            a = new gdQe(a);
        this.id = a
    };
    gdv("google.gdata.atom.Feed.prototype.setId", gdK[gd].ca);
    gdK[gd].Nc = function(){
        return this.link
    };
    gdv("google.gdata.atom.Feed.prototype.getLinks", gdK[gd].Nc);
    gdK[gd].Db = function(a){
        this.link = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.gb(a[b])
    };
    gdv("google.gdata.atom.Feed.prototype.setLinks", gdK[gd].Db);
    gdK[gd].gb = function(a){
        if (a[gdl] === gde) 
            a = new this.j(a);
        this.link[gdi](a)
    };
    gdv("google.gdata.atom.Feed.prototype.addLink", gdK[gd].gb);
    gdK[gd].Yh = function(){
        return this.logo
    };
    gdv("google.gdata.atom.Feed.prototype.getLogo", gdK[gd].Yh);
    gdK[gd].Nf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdUe(a);
        this.logo = a
    };
    gdv("google.gdata.atom.Feed.prototype.setLogo", gdK[gd].Nf);
    gdK[gd].ad = function(){
        return this.rights
    };
    gdv("google.gdata.atom.Feed.prototype.getRights", gdK[gd].ad);
    gdK[gd].Pb = function(a){
        if (a && a[gdl] === gde) 
            a = new this.sc(a);
        this.rights = a
    };
    gdv("google.gdata.atom.Feed.prototype.setRights", gdK[gd].Pb);
    gdK[gd].$i = function(){
        return this.subtitle
    };
    gdv("google.gdata.atom.Feed.prototype.getSubTitle", gdK[gd].$i);
    gdK[gd].sg = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Jg(a);
        this.subtitle = a
    };
    gdv("google.gdata.atom.Feed.prototype.setSubTitle", gdK[gd].sg);
    gdK[gd].Ma = function(){
        return this[gdza]
    };
    gdv("google.gdata.atom.Feed.prototype.getTitle", gdK[gd].Ma);
    gdK[gd].ka = function(a){
        if (a && a[gdl] === gde) 
            a = new this.tc(a);
        gdia(this, a)
    };
    gdv("google.gdata.atom.Feed.prototype.setTitle", gdK[gd].ka);
    gdK[gd].ld = function(){
        return this.updated
    };
    gdv("google.gdata.atom.Feed.prototype.getUpdated", gdK[gd].ld);
    gdK[gd].Wb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdYe(a);
        this.updated = a
    };
    gdv("google.gdata.atom.Feed.prototype.setUpdated", gdK[gd].Wb);
    gdv("google.gdata.Category", gdF);
    gdv("google.gdata.Generator", gdPe);
    gdv("google.gdata.Id", gdQe);
    gdv("google.gdata.Name", gdVe);
    gdv("google.gdata.Person", gd_e);
    gdv("google.gdata.Published", gdWe);
    gdv("google.gdata.Text", gdI);
    gdv("google.gdata.Updated", gdYe);
    gdv("google.gdata.Uri", gdZe);
    gdJ[gd].Ac = function(){
        return gdF
    };
    gdv("google.gdata.atom.Entry.prototype.getCategoryClass", gdJ[gd].Ac);
    gdJ[gd].l = function(){
        return gdG
    };
    gdv("google.gdata.atom.Entry.prototype.getLinkClass", gdJ[gd].l);
    gdK[gd].Ac = function(){
        return gdF
    };
    gdv("google.gdata.atom.Feed.prototype.getCategoryClass", gdK[gd].Ac);
    gdK[gd].t = function(){
        return gdJ
    };
    gdv("google.gdata.atom.Feed.prototype.getEntryClass", gdK[gd].t);
    gdK[gd].l = function(){
        return gdG
    };
    gdv("google.gdata.atom.Feed.prototype.getLinkClass", gdK[gd].l);
    gdA.opensearch = {};
    gdA.opensearch.namespace = {};
    gdA.opensearch.namespace.OPENSEARCH = "http://a9.com/-/spec/opensearchrss/1.0/";
    var gd0e = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            this.$t = this.$t
    };
    gdv("google.gdata.opensearch.ItemsPerPage", gd0e);
    gd0e[gd].b = function(){
        return this.$t === gda ? gda : gdd(this.$t)
    };
    gdv("google.gdata.opensearch.ItemsPerPage.prototype.getValue", gd0e[gd].b);
    gd0e[gd].a = function(a){
        this.$t = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.opensearch.ItemsPerPage.prototype.setValue", gd0e[gd].a);
    var gd1e = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            this.$t = this.$t
    };
    gdv("google.gdata.opensearch.StartIndex", gd1e);
    gd1e[gd].b = function(){
        return this.$t === gda ? gda : gdd(this.$t)
    };
    gdv("google.gdata.opensearch.StartIndex.prototype.getValue", gd1e[gd].b);
    gd1e[gd].a = function(a){
        this.$t = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.opensearch.StartIndex.prototype.setValue", gd1e[gd].a);
    var gd2e = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            this.$t = this.$t
    };
    gdv("google.gdata.opensearch.TotalResults", gd2e);
    gd2e[gd].b = function(){
        return this.$t === gda ? gda : gdd(this.$t)
    };
    gdv("google.gdata.opensearch.TotalResults.prototype.getValue", gd2e[gd].b);
    gd2e[gd].a = function(a){
        this.$t = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.opensearch.TotalResults.prototype.setValue", gd2e[gd].a);
    gdv("google.gdata.ItemsPerPage", gd0e);
    gdv("google.gdata.StartIndex", gd1e);
    gdv("google.gdata.TotalResults", gd2e);
    gdA.namespace = {};
    gdA.namespace.GD = "http://schemas.google.com/g/2005";
    var gd3e = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.AttendeeStatus", gd3e);
    gd3e[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.AttendeeStatus.prototype.getValue", gd3e[gd].b);
    gd3e[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.AttendeeStatus.prototype.setValue", gd3e[gd].a);
    var gd4e = gdA.namespace.GD + "#event.accepted";
    gdv("google.gdata.AttendeeStatus.VALUE_ACCEPTED", gd4e);
    var gd5e = gdA.namespace.GD + "#event.declined";
    gdv("google.gdata.AttendeeStatus.VALUE_DECLINED", gd5e);
    var gd6e = gdA.namespace.GD + "#event.invited";
    gdv("google.gdata.AttendeeStatus.VALUE_INVITED", gd6e);
    var gd7e = gdA.namespace.GD + "#event.tentative";
    gdv("google.gdata.AttendeeStatus.VALUE_TENTATIVE", gd7e);
    var gd8e = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.AttendeeType", gd8e);
    gd8e[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.AttendeeType.prototype.getValue", gd8e[gd].b);
    gd8e[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.AttendeeType.prototype.setValue", gd8e[gd].a);
    var gd9e = gdA.namespace.GD + "#event.optional";
    gdv("google.gdata.AttendeeType.VALUE_OPTIONAL", gd9e);
    var gd$e = gdA.namespace.GD + "#event.required";
    gdv("google.gdata.AttendeeType.VALUE_REQUIRED", gd$e);
    var gdaf = function(){
    };
    gdv("google.gdata.Deleted", gdaf);
    var gdbf = function(a){
        if (a) {
            this.address = a.address;
            gdua(this, a[gd7a]);
            this.F(a.primary);
            this.rel = a.rel
        }
        else {
            this.address = this.address;
            gdua(this, this[gd7a]);
            this.primary = this.primary;
            this.rel = this.rel
        }
    };
    gdv("google.gdata.Email", gdbf);
    gdbf[gd].wc = function(){
        return this.address
    };
    gdv("google.gdata.Email.prototype.getAddress", gdbf[gd].wc);
    gdbf[gd].sd = function(a){
        this.address = a
    };
    gdv("google.gdata.Email.prototype.setAddress", gdbf[gd].sd);
    gdbf[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.Email.prototype.getLabel", gdbf[gd].u);
    gdbf[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.Email.prototype.setLabel", gdbf[gd].A);
    gdbf[gd].Y = function(){
        return this.primary === gda ? gda : this.primary === "true"
    };
    gdv("google.gdata.Email.prototype.getPrimary", gdbf[gd].Y);
    gdbf[gd].F = function(a){
        this.primary = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Email.prototype.setPrimary", gdbf[gd].F);
    gdbf[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.Email.prototype.getRel", gdbf[gd].i);
    gdbf[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.Email.prototype.setRel", gdbf[gd].h);
    var gdcf = gdA.namespace.GD + "#home";
    gdv("google.gdata.Email.REL_HOME", gdcf);
    var gddf = gdA.namespace.GD + "#other";
    gdv("google.gdata.Email.REL_OTHER", gddf);
    var gdef = gdA.namespace.GD + "#work";
    gdv("google.gdata.Email.REL_WORK", gdef);
    var gdL = function(a){
        if (!gdu(this.Gg)) 
            this.Gg = gdNe;
        gdJ[gdq](this, a);
        if (a) {
            this.qf(a.control);
            this.vf(a.edited)
        }
        else {
            this.app$control = gdA.util.mutateTo(this.app$control, this.Gg);
            this.app$edited = gdA.util.mutateTo(this.app$edited, gdMe)
        }
    };
    gdv("google.gdata.Entry", gdL);
    gdL.c(gdJ);
    gdL[gd].yd = gdA.app.namespace.APP;
    gdv("google.gdata.Entry.prototype.xmlns$app", gdL[gd].yd);
    gdL[gd].vh = function(){
        return this.app$control
    };
    gdv("google.gdata.Entry.prototype.getControl", gdL[gd].vh);
    gdL[gd].qf = function(a){
        if (a &&
        a[gdl] ===
        gde) 
            a = new this.Gg(a);
        this.app$control = a
    };
    gdv("google.gdata.Entry.prototype.setControl", gdL[gd].qf);
    gdL[gd].Bh = function(){
        return this.app$edited
    };
    gdv("google.gdata.Entry.prototype.getEdited", gdL[gd].Bh);
    gdL[gd].vf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdMe(a);
        this.app$edited = a
    };
    gdv("google.gdata.Entry.prototype.setEdited", gdL[gd].vf);
    gdL[gd].ce = function(){
        return this.g("edit", gdH)
    };
    gdv("google.gdata.Entry.prototype.getEditLink", gdL[gd].ce);
    gdL[gd].mb = function(){
        return this.g("self", gdH)
    };
    gdv("google.gdata.Entry.prototype.getSelfLink", gdL[gd].mb);
    gdL[gd].g = function(a, b){
        var c = gdA.util.Te(this.link, a, b);
        return c === gda ? gda : this.link[c]
    };
    gdv("google.gdata.Entry.prototype.getLink", gdL[gd].g);
    gdL[gd].bd = function(a, b){
        if (!this[gdEa]) 
            return gdA.util.handleError(Error("entry is not associated with a GData service"), b);
        var c = this.mb();
        if (!c || !c[gdr]) 
            return gdA.util.handleError(Error("entry has no self link"), b);
        var d = c[gdr];
        return this[gdEa].T(d, a, b, this[gdl])
    };
    gdv("google.gdata.Entry.prototype.getSelf", gdL[gd].bd);
    gdL[gd].mc = function(a, b){
        if (!this[gdEa]) 
            return gdA.util.handleError(Error("entry is not associated with a GData service"), b);
        var c = this.ce();
        if (!c || !c[gdr]) 
            return gdA.util.handleError(Error("entry has no edit link"), b);
        var d = c[gdr];
        return this[gdEa].mc(d, this, a, b)
    };
    gdv("google.gdata.Entry.prototype.updateEntry", gdL[gd].mc);
    gdL[gd].Zb = function(a, b){
        if (!this[gdEa]) 
            return gdA.util.handleError(Error("entry is not associated with a GData service"), b);
        var c = this.ce();
        if (!c || !c[gdr]) 
            return gdA.util.handleError(Error("entry has no edit link"), b);
        var d = c[gdr];
        this[gdEa].Zb(d, a, b)
    };
    gdv("google.gdata.Entry.prototype.deleteEntry", gdL[gd].Zb);
    var gdff = function(a){
        if (!gdu(this.qc)) 
            this.qc = gdL;
        if (a) {
            this.zf(a.entry);
            gdra(this, a[gdr]);
            this.Ua(a[gdQa]);
            this.rel = a.rel
        }
        else {
            this.entry = gdA.util.mutateTo(this.entry, this.qc);
            gdra(this, this[gdr]);
            gdna(this, this[gdQa]);
            this.rel = this.rel
        }
    };
    gdv("google.gdata.EntryLink", gdff);
    gdff[gd].T = function(){
        return this.entry
    };
    gdv("google.gdata.EntryLink.prototype.getEntry", gdff[gd].T);
    gdff[gd].zf = function(a){
        if (a && a[gdl] === gde) 
            a = new this.qc(a);
        this.entry = a
    };
    gdv("google.gdata.EntryLink.prototype.setEntry", gdff[gd].zf);
    gdff[gd].J = function(){
        return this[gdr]
    };
    gdv("google.gdata.EntryLink.prototype.getHref", gdff[gd].J);
    gdff[gd].D = function(a){
        gdra(this, a)
    };
    gdv("google.gdata.EntryLink.prototype.setHref", gdff[gd].D);
    gdff[gd].Sc = function(){
        return this[gdQa] === gda ? gda : this[gdQa] === "true"
    };
    gdv("google.gdata.EntryLink.prototype.getReadOnly", gdff[gd].Sc);
    gdff[gd].Ua = function(a){
        gdna(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.EntryLink.prototype.setReadOnly", gdff[gd].Ua);
    gdff[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.EntryLink.prototype.getRel", gdff[gd].i);
    gdff[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.EntryLink.prototype.setRel", gdff[gd].h);
    var gdgf = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.EventStatus", gdgf);
    gdgf[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.EventStatus.prototype.getValue", gdgf[gd].b);
    gdgf[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.EventStatus.prototype.setValue", gdgf[gd].a);
    var gdhf = gdA.namespace.GD + "#event.canceled";
    gdv("google.gdata.EventStatus.VALUE_CANCELED", gdhf);
    var gdif = gdA.namespace.GD + "#event.confirmed";
    gdv("google.gdata.EventStatus.VALUE_CONFIRMED", gdif);
    var gdjf = gdA.namespace.GD +
    "#event.tentative";
    gdv("google.gdata.EventStatus.VALUE_TENTATIVE", gdjf);
    var gdkf = function(a){
        if (a) {
            gdta(this, a[gd4a]);
            this.realm = a.realm;
            gdg(this, a[gdm])
        }
        else {
            gdta(this, this[gd4a]);
            this.realm = this.realm;
            gdg(this, this[gdm])
        }
    };
    gdv("google.gdata.ExtendedProperty", gdkf);
    gdkf[gd].$ = function(){
        return this[gd4a]
    };
    gdv("google.gdata.ExtendedProperty.prototype.getName", gdkf[gd].$);
    gdkf[gd].ga = function(a){
        gdta(this, a)
    };
    gdv("google.gdata.ExtendedProperty.prototype.setName", gdkf[gd].ga);
    gdkf[gd].Di = function(){
        return this.realm
    };
    gdv("google.gdata.ExtendedProperty.prototype.getRealm", gdkf[gd].Di);
    gdkf[gd].bk = function(a){
        this.realm = a
    };
    gdv("google.gdata.ExtendedProperty.prototype.setRealm", gdkf[gd].bk);
    var gdlf = gdA.namespace.GD + "#shared";
    gdv("google.gdata.ExtendedProperty.REALM_SHARED", gdlf);
    gdkf[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.ExtendedProperty.prototype.getValue", gdkf[gd].b);
    gdkf[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.ExtendedProperty.prototype.setValue", gdkf[gd].a);
    var gdM = function(a){
        if (!gdu(this.m)) 
            this.m = gdL;
        gdK[gdq](this, a);
        if (a) {
            this.Kf(a.itemsPerPage);
            this.o(a.startIndex);
            this.yg(a.totalResults)
        }
        else {
            this.openSearch$itemsPerPage = gdA.util.mutateTo(this.openSearch$itemsPerPage, gd0e);
            this.openSearch$startIndex = gdA.util.mutateTo(this.openSearch$startIndex, gd1e);
            this.openSearch$totalResults = gdA.util.mutateTo(this.openSearch$totalResults, gd2e)
        }
    };
    gdv("google.gdata.Feed", gdM);
    gdM.c(gdK);
    gdM[gd].yd = gdA.app.namespace.APP;
    gdv("google.gdata.Feed.prototype.xmlns$app", gdM[gd].yd);
    gdM[gd].Z = gdA.opensearch.namespace.OPENSEARCH;
    gdv("google.gdata.Feed.prototype.xmlns$openSearch", gdM[gd].Z);
    gdM[gd].Uh = function(){
        return this.openSearch$itemsPerPage
    };
    gdv("google.gdata.Feed.prototype.getItemsPerPage", gdM[gd].Uh);
    gdM[gd].Kf = function(a){
        if (a && a[gdl] === gde) 
            a = new gd0e(a);
        this.openSearch$itemsPerPage = a
    };
    gdv("google.gdata.Feed.prototype.setItemsPerPage", gdM[gd].Kf);
    gdM[gd].p = function(){
        return this.openSearch$startIndex
    };
    gdv("google.gdata.Feed.prototype.getStartIndex", gdM[gd].p);
    gdM[gd].o = function(a){
        if (a && a[gdl] === gde) 
            a = new gd1e(a);
        this.openSearch$startIndex = a
    };
    gdv("google.gdata.Feed.prototype.setStartIndex", gdM[gd].o);
    gdM[gd].hj = function(){
        return this.openSearch$totalResults
    };
    gdv("google.gdata.Feed.prototype.getTotalResults", gdM[gd].hj);
    gdM[gd].yg = function(a){
        if (a && a[gdl] === gde) 
            a = new gd2e(a);
        this.openSearch$totalResults = a
    };
    gdv("google.gdata.Feed.prototype.setTotalResults", gdM[gd].yg);
    gdM[gd].za = function(){
        return this.g(gdmf, gdH)
    };
    gdv("google.gdata.Feed.prototype.getEntryPostLink", gdM[gd].za);
    gdM[gd].I = function(){
        return this.g(gdnf, gdH)
    };
    gdv("google.gdata.Feed.prototype.getFeedLink", gdM[gd].I);
    gdM[gd].X = function(){
        return this.g(gdRe, gdTe)
    };
    gdv("google.gdata.Feed.prototype.getHtmlLink", gdM[gd].X);
    gdM[gd].mb = function(){
        return this.g("self", gdH)
    };
    gdv("google.gdata.Feed.prototype.getSelfLink", gdM[gd].mb);
    gdM[gd].g = function(a, b){
        var c = gdA.util.Te(this.link, a, b);
        return c === gda ? gda : this.link[c]
    };
    gdv("google.gdata.Feed.prototype.getLink", gdM[gd].g);
    gdM[gd].dc = function(a, b, c){
        if (!this[gdEa]) 
            return gdA.util.handleError(Error("feed is not associated with a GData service"), c);
        var d = this.za();
        if (!d || !d[gdr]) 
            return gdA.util.handleError(Error("feed has no entry post link"), c);
        var e = d[gdr];
        return this[gdEa].dc(e, a, b, c)
    };
    gdv("google.gdata.Feed.prototype.insertEntry", gdM[gd].dc);
    gdM[gd].bd = function(a, b){
        if (!this[gdEa]) 
            return gdA.util.handleError(Error("feed is not associated with a GData service"), b);
        var c = this.mb();
        if (!c || !c[gdr]) 
            return gdA.util.handleError(Error("feed has no self link"), b);
        var d = c[gdr];
        return this[gdEa].H(d, a, b)
    };
    gdv("google.gdata.Feed.prototype.getSelf", gdM[gd].bd);
    var gdN = function(a){
        if (!gdu(this.cb)) 
            this.cb = gdM;
        if (a) {
            this.rf(a.countHint);
            this.Af(a.feed);
            gdra(this, a[gdr]);
            this.Ua(a[gdQa]);
            this.rel = a.rel
        }
        else {
            this.countHint = this.countHint;
            this.feed = gdA.util.mutateTo(this.feed, this.cb);
            gdra(this, this[gdr]);
            gdna(this, this[gdQa]);
            this.rel = this.rel
        }
    };
    gdv("google.gdata.FeedLink", gdN);
    gdN[gd].yh = function(){
        return this.countHint === gda ? gda : gdd(this.countHint)
    };
    gdv("google.gdata.FeedLink.prototype.getCountHint", gdN[gd].yh);
    gdN[gd].rf = function(a){
        this.countHint = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.FeedLink.prototype.setCountHint", gdN[gd].rf);
    gdN[gd].H = function(){
        return this.feed
    };
    gdv("google.gdata.FeedLink.prototype.getFeed", gdN[gd].H);
    gdN[gd].Af = function(a){
        if (a && a[gdl] === gde) 
            a = new this.cb(a);
        this.feed = a
    };
    gdv("google.gdata.FeedLink.prototype.setFeed", gdN[gd].Af);
    gdN[gd].J = function(){
        return this[gdr]
    };
    gdv("google.gdata.FeedLink.prototype.getHref", gdN[gd].J);
    gdN[gd].D = function(a){
        gdra(this, a)
    };
    gdv("google.gdata.FeedLink.prototype.setHref", gdN[gd].D);
    gdN[gd].Sc = function(){
        return this[gdQa] === gda ? gda : this[gdQa] === "true"
    };
    gdv("google.gdata.FeedLink.prototype.getReadOnly", gdN[gd].Sc);
    gdN[gd].Ua = function(a){
        gdna(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.FeedLink.prototype.setReadOnly", gdN[gd].Ua);
    gdN[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.FeedLink.prototype.getRel", gdN[gd].i);
    gdN[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.FeedLink.prototype.setRel", gdN[gd].h);
    var gdO = function(a){
        if (a) {
            this.address = a.address;
            gdua(this, a[gd7a]);
            this.F(a.primary);
            this.protocol = a[gdWa];
            this.rel = a.rel
        }
        else {
            this.address = this.address;
            gdua(this, this[gd7a]);
            this.primary = this.primary;
            this.protocol = this[gdWa];
            this.rel = this.rel
        }
    };
    gdv("google.gdata.Im", gdO);
    gdO[gd].wc = function(){
        return this.address
    };
    gdv("google.gdata.Im.prototype.getAddress", gdO[gd].wc);
    gdO[gd].sd = function(a){
        this.address = a
    };
    gdv("google.gdata.Im.prototype.setAddress", gdO[gd].sd);
    gdO[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.Im.prototype.getLabel", gdO[gd].u);
    gdO[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.Im.prototype.setLabel", gdO[gd].A);
    gdO[gd].Y = function(){
        return this.primary === gda ? gda : this.primary === "true"
    };
    gdv("google.gdata.Im.prototype.getPrimary", gdO[gd].Y);
    gdO[gd].F = function(a){
        this.primary = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Im.prototype.setPrimary", gdO[gd].F);
    gdO[gd].zi = function(){
        return this[gdWa]
    };
    gdv("google.gdata.Im.prototype.getProtocol", gdO[gd].zi);
    gdO[gd].ak = function(a){
        this.protocol = a
    };
    gdv("google.gdata.Im.prototype.setProtocol", gdO[gd].ak);
    var gdof = gdA.namespace.GD + "#AIM";
    gdv("google.gdata.Im.PROTOCOL_AIM", gdof);
    var gdpf = gdA.namespace.GD + "#GOOGLE_TALK";
    gdv("google.gdata.Im.PROTOCOL_GOOGLE_TALK", gdpf);
    var gdqf = gdA.namespace.GD + "#ICQ";
    gdv("google.gdata.Im.PROTOCOL_ICQ", gdqf);
    var gdrf = gdA.namespace.GD + "#JABBER";
    gdv("google.gdata.Im.PROTOCOL_JABBER", gdrf);
    var gdsf = gdA.namespace.GD + "#MSN";
    gdv("google.gdata.Im.PROTOCOL_MSN", gdsf);
    var gdtf = gdA.namespace.GD + "#QQ";
    gdv("google.gdata.Im.PROTOCOL_QQ", gdtf);
    var gduf = gdA.namespace.GD + "#SKYPE";
    gdv("google.gdata.Im.PROTOCOL_SKYPE", gduf);
    var gdvf = gdA.namespace.GD + "#YAHOO";
    gdv("google.gdata.Im.PROTOCOL_YAHOO", gdvf);
    gdO[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.Im.prototype.getRel", gdO[gd].i);
    gdO[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.Im.prototype.setRel", gdO[gd].h);
    var gdwf = gdA.namespace.GD + "#home";
    gdv("google.gdata.Im.REL_HOME", gdwf);
    var gdxf = gdA.namespace.GD + "#other";
    gdv("google.gdata.Im.REL_OTHER", gdxf);
    var gdyf = gdA.namespace.GD +
    "#work";
    gdv("google.gdata.Im.REL_WORK", gdyf);
    var gdzf = function(a){
        gdF[gdq](this, a);
        var b = ["xml$lang"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.Kind", gdzf);
    gdzf.c(gdF);
    var gdAf = gdA.namespace.GD + "#kind";
    gdv("google.gdata.Kind.SCHEME_KIND", gdAf);
    var gdBf = function(a){
        gdG[gdq](this, a)
    };
    gdv("google.gdata.Link", gdBf);
    gdBf.c(gdG);
    var gdmf = gdA.namespace.GD + "#post";
    gdv("google.gdata.Link.REL_ENTRY_POST", gdmf);
    var gdnf = gdA.namespace.GD + "#feed";
    gdv("google.gdata.Link.REL_FEED", gdnf);
    var gdCf = gdA.namespace.GD + "#batch";
    gdv("google.gdata.Link.REL_FEED_BATCH", gdCf);
    var gdDf = function(a, b, c, d){
        var e = new gdBf;
        e.h(a);
        e.G(b);
        e.D(c);
        e.ka(d);
        return e
    };
    gdv("google.gdata.Link.create", gdDf);
    var gdEf = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.MessageKind", gdEf);
    gdEf.c(gdzf);
    var gdFf = gdA.namespace.GD + "#message";
    gdv("google.gdata.MessageKind.TERM_MESSAGE", gdFf);
    var gdGf = function(a){
        if (a) {
            this.jf(a.amount);
            this.currencyCode = a.currencyCode
        }
        else {
            this.amount = this.amount;
            this.currencyCode = this.currencyCode
        }
    };
    gdv("google.gdata.Money", gdGf);
    gdGf[gd].ah = function(){
        return this.amount === gda ? gda : gdd(this.amount)
    };
    gdv("google.gdata.Money.prototype.getAmount", gdGf[gd].ah);
    gdGf[gd].jf = function(a){
        this.amount = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Money.prototype.setAmount", gdGf[gd].jf);
    gdGf[gd].Fc = function(){
        return this.currencyCode
    };
    gdv("google.gdata.Money.prototype.getCurrencyCode", gdGf[gd].Fc);
    gdGf[gd].ud = function(a){
        this.currencyCode = a
    };
    gdv("google.gdata.Money.prototype.setCurrencyCode", gdGf[gd].ud);
    var gdHf = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.OrgName", gdHf);
    gdHf[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.OrgName.prototype.getValue", gdHf[gd].b);
    gdHf[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.OrgName.prototype.setValue", gdHf[gd].a);
    var gdIf = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.OrgTitle", gdIf);
    gdIf[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.OrgTitle.prototype.getValue", gdIf[gd].b);
    gdIf[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.OrgTitle.prototype.setValue", gdIf[gd].a);
    var gdP = function(a){
        if (a) {
            gdua(this, a[gd7a]);
            this.Rf(a.orgName);
            this.Sf(a.orgTitle);
            this.F(a.primary);
            this.rel = a.rel
        }
        else {
            gdua(this, this[gd7a]);
            this.gd$orgName = gdA.util.mutateTo(this.gd$orgName, gdHf);
            this.gd$orgTitle = gdA.util.mutateTo(this.gd$orgTitle, gdIf);
            this.primary = this.primary;
            this.rel = this.rel
        }
    };
    gdv("google.gdata.Organization", gdP);
    gdP[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.Organization.prototype.getLabel", gdP[gd].u);
    gdP[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.Organization.prototype.setLabel", gdP[gd].A);
    gdP[gd].gi = function(){
        return this.gd$orgName
    };
    gdv("google.gdata.Organization.prototype.getOrgName", gdP[gd].gi);
    gdP[gd].Rf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdHf(a);
        this.gd$orgName = a
    };
    gdv("google.gdata.Organization.prototype.setOrgName", gdP[gd].Rf);
    gdP[gd].hi = function(){
        return this.gd$orgTitle
    };
    gdv("google.gdata.Organization.prototype.getOrgTitle", gdP[gd].hi);
    gdP[gd].Sf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdIf(a);
        this.gd$orgTitle = a
    };
    gdv("google.gdata.Organization.prototype.setOrgTitle", gdP[gd].Sf);
    gdP[gd].Y = function(){
        return this.primary === gda ? gda : this.primary === "true"
    };
    gdv("google.gdata.Organization.prototype.getPrimary", gdP[gd].Y);
    gdP[gd].F = function(a){
        this.primary = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Organization.prototype.setPrimary", gdP[gd].F);
    gdP[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.Organization.prototype.getRel", gdP[gd].i);
    gdP[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.Organization.prototype.setRel", gdP[gd].h);
    var gdJf = gdA.namespace.GD + "#other";
    gdv("google.gdata.Organization.REL_OTHER", gdJf);
    var gdKf = gdA.namespace.GD + "#work";
    gdv("google.gdata.Organization.REL_WORK", gdKf);
    var gdLf = function(a){
        if (a) {
            gdua(this, a[gd7a]);
            this.F(a.primary);
            this.rel = a.rel;
            this.$t = a[gdm]
        }
        else {
            gdua(this, this[gd7a]);
            this.primary = this.primary;
            this.rel = this.rel;
            this.$t = this.$t
        }
    };
    gdv("google.gdata.PhoneNumber", gdLf);
    gdLf[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.PhoneNumber.prototype.getLabel", gdLf[gd].u);
    gdLf[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.PhoneNumber.prototype.setLabel", gdLf[gd].A);
    gdLf[gd].Y = function(){
        return this.primary === gda ? gda : this.primary === "true"
    };
    gdv("google.gdata.PhoneNumber.prototype.getPrimary", gdLf[gd].Y);
    gdLf[gd].F = function(a){
        this.primary = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.PhoneNumber.prototype.setPrimary", gdLf[gd].F);
    gdLf[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.PhoneNumber.prototype.getRel", gdLf[gd].i);
    gdLf[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.PhoneNumber.prototype.setRel", gdLf[gd].h);
    var gdMf = gdA.namespace.GD + "#fax";
    gdv("google.gdata.PhoneNumber.REL_FAX", gdMf);
    var gdNf = gdA.namespace.GD + "#home";
    gdv("google.gdata.PhoneNumber.REL_HOME", gdNf);
    var gdOf = gdA.namespace.GD +
    "#home_fax";
    gdv("google.gdata.PhoneNumber.REL_HOME_FAX", gdOf);
    var gdPf = gdA.namespace.GD + "#mobile";
    gdv("google.gdata.PhoneNumber.REL_MOBILE", gdPf);
    var gdQf = gdA.namespace.GD + "#other";
    gdv("google.gdata.PhoneNumber.REL_OTHER", gdQf);
    var gdRf = gdA.namespace.GD + "#pager";
    gdv("google.gdata.PhoneNumber.REL_PAGER", gdRf);
    var gdSf = gdA.namespace.GD + "#work";
    gdv("google.gdata.PhoneNumber.REL_WORK", gdSf);
    var gdTf = gdA.namespace.GD + "#work_fax";
    gdv("google.gdata.PhoneNumber.REL_WORK_FAX", gdTf);
    gdLf[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.PhoneNumber.prototype.getValue", gdLf[gd].b);
    gdLf[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.PhoneNumber.prototype.setValue", gdLf[gd].a);
    var gdUf = function(a){
        if (a) {
            gdua(this, a[gd7a]);
            this.F(a.primary);
            this.rel = a.rel;
            this.$t = a[gdm]
        }
        else {
            gdua(this, this[gd7a]);
            this.primary = this.primary;
            this.rel = this.rel;
            this.$t = this.$t
        }
    };
    gdv("google.gdata.PostalAddress", gdUf);
    gdUf[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.PostalAddress.prototype.getLabel", gdUf[gd].u);
    gdUf[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.PostalAddress.prototype.setLabel", gdUf[gd].A);
    gdUf[gd].Y = function(){
        return this.primary === gda ? gda : this.primary === "true"
    };
    gdv("google.gdata.PostalAddress.prototype.getPrimary", gdUf[gd].Y);
    gdUf[gd].F = function(a){
        this.primary = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.PostalAddress.prototype.setPrimary", gdUf[gd].F);
    gdUf[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.PostalAddress.prototype.getRel", gdUf[gd].i);
    gdUf[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.PostalAddress.prototype.setRel", gdUf[gd].h);
    var gdVf = gdA.namespace.GD + "#home";
    gdv("google.gdata.PostalAddress.REL_HOME", gdVf);
    var gdWf = gdA.namespace.GD + "#other";
    gdv("google.gdata.PostalAddress.REL_OTHER", gdWf);
    var gdXf = gdA.namespace.GD + "#work";
    gdv("google.gdata.PostalAddress.REL_WORK", gdXf);
    gdUf[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.PostalAddress.prototype.getValue", gdUf[gd].b);
    gdUf[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.PostalAddress.prototype.setValue", gdUf[gd].a);
    var gdQ = function(a){
        if (a) {
            this.mf(a.average);
            this.Of(a.max);
            this.Pf(a.min);
            this.Qf(a.numRaters);
            this.rel = a.rel;
            this.a(a[gdm])
        }
        else {
            this.average = this.average;
            this.max = this.max;
            this.min = this.min;
            this.numRaters = this.numRaters;
            this.rel = this.rel;
            gdg(this, this[gdm])
        }
    };
    gdv("google.gdata.Rating", gdQ);
    gdQ[gd].eh = function(){
        return this.average === gda ? gda : gdd(this.average)
    };
    gdv("google.gdata.Rating.prototype.getAverage", gdQ[gd].eh);
    gdQ[gd].mf = function(a){
        this.average = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Rating.prototype.setAverage", gdQ[gd].mf);
    gdQ[gd].Zh = function(){
        return this.max === gda ? gda : gdd(this.max)
    };
    gdv("google.gdata.Rating.prototype.getMax", gdQ[gd].Zh);
    gdQ[gd].Of = function(a){
        this.max = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Rating.prototype.setMax", gdQ[gd].Of);
    gdQ[gd].bi = function(){
        return this.min === gda ? gda : gdd(this.min)
    };
    gdv("google.gdata.Rating.prototype.getMin", gdQ[gd].bi);
    gdQ[gd].Pf = function(a){
        this.min = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Rating.prototype.setMin", gdQ[gd].Pf);
    gdQ[gd].fi = function(){
        return this.numRaters ===
        gda ? gda : gdd(this.numRaters)
    };
    gdv("google.gdata.Rating.prototype.getNumRaters", gdQ[gd].fi);
    gdQ[gd].Qf = function(a){
        this.numRaters = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Rating.prototype.setNumRaters", gdQ[gd].Qf);
    gdQ[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.Rating.prototype.getRel", gdQ[gd].i);
    gdQ[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.Rating.prototype.setRel", gdQ[gd].h);
    var gdYf = gdA.namespace.GD + "#overall";
    gdv("google.gdata.Rating.REL_OVERALL", gdYf);
    var gdZf = gdA.namespace.GD + "#price";
    gdv("google.gdata.Rating.REL_PRICE", gdZf);
    var gd_f = gdA.namespace.GD + "#quality";
    gdv("google.gdata.Rating.REL_QUALITY", gd_f);
    gdQ[gd].b = function(){
        return this[gdm] === gda ? gda : gdd(this[gdm])
    };
    gdv("google.gdata.Rating.prototype.getValue", gdQ[gd].b);
    gdQ[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.Rating.prototype.setValue", gdQ[gd].a);
    var gd0f = function(a){
        this.$t = a ? a[gdm] : this.$t
    };
    gdv("google.gdata.Recurrence", gd0f);
    gd0f[gd].b = function(){
        return this.$t
    };
    gdv("google.gdata.Recurrence.prototype.getValue", gd0f[gd].b);
    gd0f[gd].a = function(a){
        this.$t = a
    };
    gdv("google.gdata.Recurrence.prototype.setValue", gd0f[gd].a);
    var gdR = function(a){
        if (a) {
            this.gf(a.absoluteTime);
            this.sf(a.days);
            this.setHours(a.hours);
            this.method = a.method;
            this.setMinutes(a.minutes)
        }
        else {
            this.absoluteTime = this.absoluteTime;
            this.days = this.days;
            this.hours = this.hours;
            this.method = this.method;
            this.minutes = this.minutes
        }
    };
    gdv("google.gdata.Reminder", gdR);
    gdR[gd].Wg = function(){
        return this.absoluteTime === gda ? gda : gdB(this.absoluteTime)
    };
    gdv("google.gdata.Reminder.prototype.getAbsoluteTime", gdR[gd].Wg);
    gdR[gd].gf = function(a){
        this.absoluteTime = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.Reminder.prototype.setAbsoluteTime", gdR[gd].gf);
    gdR[gd].zh = function(){
        return this.days === gda ? gda : gdd(this.days)
    };
    gdv("google.gdata.Reminder.prototype.getDays", gdR[gd].zh);
    gdR[gd].sf = function(a){
        this.days = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Reminder.prototype.setDays", gdR[gd].sf);
    gdR[gd].getHours = function(){
        return this.hours === gda ? gda : gdd(this.hours)
    };
    gdv("google.gdata.Reminder.prototype.getHours", gdR[gd].getHours);
    gdR[gd].setHours = function(a){
        this.hours = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Reminder.prototype.setHours", gdR[gd].setHours);
    gdR[gd].ai = function(){
        return this.method
    };
    gdv("google.gdata.Reminder.prototype.getMethod", gdR[gd].ai);
    gdR[gd].Wj = function(a){
        this.method = a
    };
    gdv("google.gdata.Reminder.prototype.setMethod", gdR[gd].Wj);
    gdv("google.gdata.Reminder.METHOD_ALERT", "alert");
    gdv("google.gdata.Reminder.METHOD_ALL", "all");
    gdv("google.gdata.Reminder.METHOD_EMAIL", "email");
    gdv("google.gdata.Reminder.METHOD_NONE", "none");
    gdv("google.gdata.Reminder.METHOD_SMS", "sms");
    gdR[gd].getMinutes = function(){
        return this.minutes === gda ? gda : gdd(this.minutes)
    };
    gdv("google.gdata.Reminder.prototype.getMinutes", gdR[gd].getMinutes);
    gdR[gd].setMinutes = function(a){
        this.minutes = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.Reminder.prototype.setMinutes", gdR[gd].setMinutes);
    var gd1f = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.Transparency", gd1f);
    gd1f[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.Transparency.prototype.getValue", gd1f[gd].b);
    gd1f[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.Transparency.prototype.setValue", gd1f[gd].a);
    var gd2f = gdA.namespace.GD + "#event.opaque";
    gdv("google.gdata.Transparency.VALUE_OPAQUE", gd2f);
    var gd3f = gdA.namespace.GD + "#event.transparent";
    gdv("google.gdata.Transparency.VALUE_TRANSPARENT", gd3f);
    var gd4f = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.Visibility", gd4f);
    gd4f[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.Visibility.prototype.getValue", gd4f[gd].b);
    gd4f[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.Visibility.prototype.setValue", gd4f[gd].a);
    var gd5f = gdA.namespace.GD + "#event.confidential";
    gdv("google.gdata.Visibility.VALUE_CONFIDENTIAL", gd5f);
    var gd6f = gdA.namespace.GD + "#event.default";
    gdv("google.gdata.Visibility.VALUE_DEFAULT", gd6f);
    var gd7f = gdA.namespace.GD +
    "#event.private";
    gdv("google.gdata.Visibility.VALUE_PRIVATE", gd7f);
    var gd8f = gdA.namespace.GD + "#event.public";
    gdv("google.gdata.Visibility.VALUE_PUBLIC", gd8f);
    var gdS = function(a){
        if (a) {
            this.xf(a.endTime);
            this.ig(a.reminder);
            this.rg(a.startTime);
            this.valueString = a.valueString
        }
        else {
            this.endTime = this.endTime;
            if (this.gd$reminder) {
                var b = this.gd$reminder;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$reminder[c] = gdA.util.mutateTo(b[c], gdR)
            }
            else 
                this.gd$reminder = [];
            this.startTime = this.startTime;
            this.valueString = this.valueString
        }
    };
    gdv("google.gdata.When", gdS);
    gdS[gd].Dh = function(){
        return this.endTime === gda ? gda : gdB(this.endTime)
    };
    gdv("google.gdata.When.prototype.getEndTime", gdS[gd].Dh);
    gdS[gd].xf = function(a){
        this.endTime = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.When.prototype.setEndTime", gdS[gd].xf);
    gdS[gd].Ki = function(){
        return this.gd$reminder
    };
    gdv("google.gdata.When.prototype.getReminder", gdS[gd].Ki);
    gdS[gd].ig = function(a){
        this.gd$reminder = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ib(a[b])
    };
    gdv("google.gdata.When.prototype.setReminder", gdS[gd].ig);
    gdS[gd].ib = function(a){
        if (a[gdl] === gde) 
            a = new gdR(a);
        this.gd$reminder[gdi](a)
    };
    gdv("google.gdata.When.prototype.addReminder", gdS[gd].ib);
    gdS[gd].Zi = function(){
        return this.startTime === gda ? gda : gdB(this.startTime)
    };
    gdv("google.gdata.When.prototype.getStartTime", gdS[gd].Zi);
    gdS[gd].rg = function(a){
        this.startTime = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.When.prototype.setStartTime", gdS[gd].rg);
    gdS[gd].Na = function(){
        return this.valueString
    };
    gdv("google.gdata.When.prototype.getValueString", gdS[gd].Na);
    gdS[gd].Va = function(a){
        this.valueString = a
    };
    gdv("google.gdata.When.prototype.setValueString", gdS[gd].Va);
    var gdT = function(a){
        if (!gdu(this.ua)) 
            this.ua = gdff;
        if (a) {
            this.ra(a.entryLink);
            gdua(this, a[gd7a]);
            this.rel = a.rel;
            this.valueString = a.valueString
        }
        else {
            this.gd$entryLink = gdA.util.mutateTo(this.gd$entryLink, this.ua);
            gdua(this, this[gd7a]);
            this.rel = this.rel;
            this.valueString = this.valueString
        }
    };
    gdv("google.gdata.Where", gdT);
    gdT[gd].ya = function(){
        return this.gd$entryLink
    };
    gdv("google.gdata.Where.prototype.getEntryLink", gdT[gd].ya);
    gdT[gd].ra = function(a){
        if (a && a[gdl] === gde) 
            a = new this.ua(a);
        this.gd$entryLink = a
    };
    gdv("google.gdata.Where.prototype.setEntryLink", gdT[gd].ra);
    gdT[gd].u = function(){
        return this[gd7a]
    };
    gdv("google.gdata.Where.prototype.getLabel", gdT[gd].u);
    gdT[gd].A = function(a){
        gdua(this, a)
    };
    gdv("google.gdata.Where.prototype.setLabel", gdT[gd].A);
    gdT[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.Where.prototype.getRel", gdT[gd].i);
    gdT[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.Where.prototype.setRel", gdT[gd].h);
    var gd9f = gdA.namespace.GD + "#event";
    gdv("google.gdata.Where.REL_EVENT", gd9f);
    var gd$f = gdA.namespace.GD + "#event.alternate";
    gdv("google.gdata.Where.REL_EVENT_ALTERNATE", gd$f);
    var gdag = gdA.namespace.GD + "#event.parking";
    gdv("google.gdata.Where.REL_EVENT_PARKING", gdag);
    gdT[gd].Na = function(){
        return this.valueString
    };
    gdv("google.gdata.Where.prototype.getValueString", gdT[gd].Na);
    gdT[gd].Va = function(a){
        this.valueString = a
    };
    gdv("google.gdata.Where.prototype.setValueString", gdT[gd].Va);
    var gdU = function(a){
        if (!gdu(this.ua)) 
            this.ua = gdff;
        if (a) {
            this.kf(a.attendeeStatus);
            this.lf(a.attendeeType);
            this.email = a.email;
            this.ra(a.entryLink);
            this.rel = a.rel;
            this.valueString = a.valueString
        }
        else {
            this.gd$attendeeStatus = gdA.util.mutateTo(this.gd$attendeeStatus, gd3e);
            this.gd$attendeeType = gdA.util.mutateTo(this.gd$attendeeType, gd8e);
            this.email = this.email;
            this.gd$entryLink = gdA.util.mutateTo(this.gd$entryLink, this.ua);
            this.rel = this.rel;
            this.valueString = this.valueString
        }
    };
    gdv("google.gdata.Who", gdU);
    gdU[gd].bh = function(){
        return this.gd$attendeeStatus
    };
    gdv("google.gdata.Who.prototype.getAttendeeStatus", gdU[gd].bh);
    gdU[gd].kf = function(a){
        if (a && a[gdl] === gde) 
            a = new gd3e(a);
        this.gd$attendeeStatus = a
    };
    gdv("google.gdata.Who.prototype.setAttendeeStatus", gdU[gd].kf);
    gdU[gd].dh = function(){
        return this.gd$attendeeType
    };
    gdv("google.gdata.Who.prototype.getAttendeeType", gdU[gd].dh);
    gdU[gd].lf = function(a){
        if (a && a[gdl] === gde) 
            a = new gd8e(a);
        this.gd$attendeeType = a
    };
    gdv("google.gdata.Who.prototype.setAttendeeType", gdU[gd].lf);
    gdU[gd].Hc = function(){
        return this.email
    };
    gdv("google.gdata.Who.prototype.getEmail", gdU[gd].Hc);
    gdU[gd].hc = function(a){
        this.email = a
    };
    gdv("google.gdata.Who.prototype.setEmail", gdU[gd].hc);
    gdU[gd].ya = function(){
        return this.gd$entryLink
    };
    gdv("google.gdata.Who.prototype.getEntryLink", gdU[gd].ya);
    gdU[gd].ra = function(a){
        if (a && a[gdl] === gde) 
            a = new this.ua(a);
        this.gd$entryLink = a
    };
    gdv("google.gdata.Who.prototype.setEntryLink", gdU[gd].ra);
    gdU[gd].i = function(){
        return this.rel
    };
    gdv("google.gdata.Who.prototype.getRel", gdU[gd].i);
    gdU[gd].h = function(a){
        this.rel = a
    };
    gdv("google.gdata.Who.prototype.setRel", gdU[gd].h);
    var gdbg = gdA.namespace.GD + "#event.attendee";
    gdv("google.gdata.Who.REL_EVENT_ATTENDEE", gdbg);
    var gdcg = gdA.namespace.GD + "#event.organizer";
    gdv("google.gdata.Who.REL_EVENT_ORGANIZER", gdcg);
    var gddg = gdA.namespace.GD + "#event.performer";
    gdv("google.gdata.Who.REL_EVENT_PERFORMER", gddg);
    var gdeg = gdA.namespace.GD + "#event.speaker";
    gdv("google.gdata.Who.REL_EVENT_SPEAKER", gdeg);
    var gdfg = gdA.namespace.GD + "#message.bcc";
    gdv("google.gdata.Who.REL_MESSAGE_BCC", gdfg);
    var gdgg = gdA.namespace.GD + "#message.cc";
    gdv("google.gdata.Who.REL_MESSAGE_CC", gdgg);
    var gdhg = gdA.namespace.GD + "#message.from";
    gdv("google.gdata.Who.REL_MESSAGE_FROM", gdhg);
    var gdig = gdA.namespace.GD + "#message.reply-to";
    gdv("google.gdata.Who.REL_MESSAGE_REPLY_TO", gdig);
    var gdjg = gdA.namespace.GD + "#message.to";
    gdv("google.gdata.Who.REL_MESSAGE_TO", gdjg);
    var gdkg = gdA.namespace.GD + "#task.assigned-to";
    gdv("google.gdata.Who.REL_TASK_ASSIGNED_TO", gdkg);
    gdU[gd].Na = function(){
        return this.valueString
    };
    gdv("google.gdata.Who.prototype.getValueString", gdU[gd].Na);
    gdU[gd].Va = function(a){
        this.valueString = a
    };
    gdv("google.gdata.Who.prototype.setValueString", gdU[gd].Va);
    var gdlg = function(a){
        if (!gdu(this.Od)) 
            this.Od = gdN;
        if (a) 
            this.ta(a.feedLink);
        else 
            this.gd$feedLink = gdA.util.mutateTo(this.gd$feedLink, this.Od)
    };
    gdv("google.gdata.Comments", gdlg);
    gdlg[gd].I = function(){
        return this.gd$feedLink
    };
    gdv("google.gdata.Comments.prototype.getFeedLink", gdlg[gd].I);
    gdlg[gd].ta = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Od(a);
        this.gd$feedLink = a
    };
    gdv("google.gdata.Comments.prototype.setFeedLink", gdlg[gd].ta);
    var gdmg = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.EventKind", gdmg);
    gdmg.c(gdzf);
    var gdng = gdA.namespace.GD + "#event";
    gdv("google.gdata.EventKind.TERM_EVENT", gdng);
    var gdog = function(a){
        if (a) {
            gdra(this, a[gdr]);
            this.id = a.originalId;
            this.Uf(a.originalStartTime)
        }
        else {
            gdra(this, this[gdr]);
            this.id = this.id;
            this.gd$when = gdA.util.mutateTo(this.gd$when, gdS)
        }
    };
    gdv("google.gdata.OriginalEvent", gdog);
    gdog[gd].J = function(){
        return this[gdr]
    };
    gdv("google.gdata.OriginalEvent.prototype.getHref", gdog[gd].J);
    gdog[gd].D = function(a){
        gdra(this, a)
    };
    gdv("google.gdata.OriginalEvent.prototype.setHref", gdog[gd].D);
    gdog[gd].ji = function(){
        return this.id
    };
    gdv("google.gdata.OriginalEvent.prototype.getOriginalId", gdog[gd].ji);
    gdog[gd].$j = function(a){
        this.id = a
    };
    gdv("google.gdata.OriginalEvent.prototype.setOriginalId", gdog[gd].$j);
    gdog[gd].ki = function(){
        return this.gd$when
    };
    gdv("google.gdata.OriginalEvent.prototype.getOriginalStartTime", gdog[gd].ki);
    gdog[gd].Uf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdS(a);
        this.gd$when = a
    };
    gdv("google.gdata.OriginalEvent.prototype.setOriginalStartTime", gdog[gd].Uf);
    var gdV = function(a){
        if (!gdu(this.Da)) 
            this.Da = gdlg;
        if (!gdu(this.Sd)) 
            this.Sd = gdU;
        gdL[gdq](this, a);
        if (a) {
            this.wb(a.comments);
            this.Ab(a.eventStatus);
            this.Gb(a.originalEvent);
            this.Ub(a.transparency);
            this.Xb(a.visibility);
            this.Bg(a.when);
            this.Cg(a.where);
            this.Dg(a.who)
        }
        else {
            this.gd$comments = gdA.util.mutateTo(this.gd$comments, this.Da);
            this.gd$eventStatus = gdA.util.mutateTo(this.gd$eventStatus, gdgf);
            this.gd$originalEvent = gdA.util.mutateTo(this.gd$originalEvent, gdog);
            this.gd$transparency = gdA.util.mutateTo(this.gd$transparency, gd1f);
            this.gd$visibility = gdA.util.mutateTo(this.gd$visibility, gd4f);
            if (this.gd$when) {
                var b = this.gd$when;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$when[c] = gdA.util.mutateTo(b[c], gdS)
            }
            else 
                this.gd$when = [];
            if (this.gd$where) {
                var b = this.gd$where;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$where[c] = gdA.util.mutateTo(b[c], gdT)
            }
            else 
                this.gd$where = [];
            if (this.gd$who) {
                var b = this.gd$who;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$who[c] = gdA.util.mutateTo(b[c], this.Sd)
            }
            else 
                this.gd$who = []
        }
        var d = ["app$control", "app$edited", "rights", "summary"];
        for (var c = 0; c < d[gdj]; c++) {
            var e = d[c];
            e in this && !gdu(this[e]) && delete this[e]
        }
    };
    gdv("google.gdata.RecurrenceExceptionEntry", gdV);
    gdV.c(gdL);
    gdV[gd].d = gdA.namespace.GD;
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.xmlns$gd", gdV[gd].d);
    gdV[gd].Z = gdA.opensearch.namespace.OPENSEARCH;
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.xmlns$openSearch", gdV[gd].Z);
    gdV[gd].Cc = function(){
        return this.gd$comments
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getComments", gdV[gd].Cc);
    gdV[gd].wb = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Da(a);
        this.gd$comments = a
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setComments", gdV[gd].wb);
    gdV[gd].Ic = function(){
        return this.gd$eventStatus
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getEventStatus", gdV[gd].Ic);
    gdV[gd].Ab = function(a){
        if (a && a[gdl] === gde) 
            a = new gdgf(a);
        this.gd$eventStatus = a
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setEventStatus", gdV[gd].Ab);
    gdV[gd].Qc = function(){
        return this.gd$originalEvent
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getOriginalEvent", gdV[gd].Qc);
    gdV[gd].Gb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdog(a);
        this.gd$originalEvent = a
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setOriginalEvent", gdV[gd].Gb);
    gdV[gd].jd = function(){
        return this.gd$transparency
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getTransparency", gdV[gd].jd);
    gdV[gd].Ub = function(a){
        if (a && a[gdl] === gde) 
            a = new gd1f(a);
        this.gd$transparency = a
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setTransparency", gdV[gd].Ub);
    gdV[gd].nd = function(){
        return this.gd$visibility
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getVisibility", gdV[gd].nd);
    gdV[gd].Xb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd4f(a);
        this.gd$visibility = a
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setVisibility", gdV[gd].Xb);
    gdV[gd].nj = function(){
        return this.gd$when
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getWhen", gdV[gd].nj);
    gdV[gd].Bg = function(a){
        this.gd$when = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Ie(a[b])
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setWhen", gdV[gd].Bg);
    gdV[gd].Ie = function(a){
        if (a[gdl] === gde) 
            a = new gdS(a);
        this.gd$when[gdi](a)
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.addWhen", gdV[gd].Ie);
    gdV[gd].oj = function(){
        return this.gd$where
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getWhere", gdV[gd].oj);
    gdV[gd].Cg = function(a){
        this.gd$where = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Je(a[b])
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setWhere", gdV[gd].Cg);
    gdV[gd].Je = function(a){
        if (a[gdl] === gde) 
            a = new gdT(a);
        this.gd$where[gdi](a)
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.addWhere", gdV[gd].Je);
    gdV[gd].pj = function(){
        return this.gd$who
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getWho", gdV[gd].pj);
    gdV[gd].Dg = function(a){
        this.gd$who = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Ke(a[b])
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.setWho", gdV[gd].Dg);
    gdV[gd].Ke = function(a){
        if (a[gdl] === gde) 
            a = new this.Sd(a);
        this.gd$who[gdi](a)
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.addWho", gdV[gd].Ke);
    var gdpg = function(a){
        if (!gdu(this.qc)) 
            this.qc = gdV;
        gdff[gdq](this, a);
        var b = ["href", "readOnly", "rel"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.RecurrenceExceptionEntryLink", gdpg);
    gdpg.c(gdff);
    var gdqg = function(a){
        if (!gdu(this.ua)) 
            this.ua = gdpg;
        if (a) {
            this.ra(a.entryLink);
            this.qg(a.specialized)
        }
        else {
            this.gd$entryLink = gdA.util.mutateTo(this.gd$entryLink, this.ua);
            this.specialized = this.specialized
        }
    };
    gdv("google.gdata.RecurrenceException", gdqg);
    gdqg[gd].ya = function(){
        return this.gd$entryLink
    };
    gdv("google.gdata.RecurrenceException.prototype.getEntryLink", gdqg[gd].ya);
    gdqg[gd].ra = function(a){
        if (a && a[gdl] === gde) 
            a = new this.ua(a);
        this.gd$entryLink = a
    };
    gdv("google.gdata.RecurrenceException.prototype.setEntryLink", gdqg[gd].ra);
    gdqg[gd].Yi = function(){
        return this.specialized === gda ? gda : this.specialized === "true"
    };
    gdv("google.gdata.RecurrenceException.prototype.getSpecialized", gdqg[gd].Yi);
    gdqg[gd].qg = function(a){
        this.specialized = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.RecurrenceException.prototype.setSpecialized", gdqg[gd].qg);
    var gdW = function(a){
        if (!gdu(this.Da)) 
            this.Da = gdlg;
        if (!gdu(this.Pd)) 
            this.Pd = gdU;
        if (!gdu(this.Qd)) 
            this.Qd = gdqg;
        gdL[gdq](this, a);
        if (a) {
            this.wb(a.comments);
            this.Ab(a.eventStatus);
            this.Eb(a.locations);
            this.Gb(a.originalEvent);
            this.Wf(a.participants);
            this.gg(a.recurrence);
            this.hg(a.recurrenceException);
            this.jg(a.reminders);
            this.xg(a.times);
            this.Ub(a.transparency);
            this.Xb(a.visibility)
        }
        else {
            this.gd$comments = gdA.util.mutateTo(this.gd$comments, this.Da);
            this.gd$eventStatus = gdA.util.mutateTo(this.gd$eventStatus, gdgf);
            if (this.gd$where) {
                var b = this.gd$where;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$where[c] = gdA.util.mutateTo(b[c], gdT)
            }
            else 
                this.gd$where = [];
            this.gd$originalEvent = gdA.util.mutateTo(this.gd$originalEvent, gdog);
            if (this.gd$who) {
                var b = this.gd$who;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$who[c] = gdA.util.mutateTo(b[c], this.Pd)
            }
            else 
                this.gd$who = [];
            this.gd$recurrence = gdA.util.mutateTo(this.gd$recurrence, gd0f);
            if (this.gd$recurrenceException) {
                var b = this.gd$recurrenceException;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$recurrenceException[c] = gdA.util.mutateTo(b[c], this.Qd)
            }
            else 
                this.gd$recurrenceException = [];
            if (this.gd$reminder) {
                var b = this.gd$reminder;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$reminder[c] = gdA.util.mutateTo(b[c], gdR)
            }
            else 
                this.gd$reminder = [];
            if (this.gd$when) {
                var b = this.gd$when;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$when[c] = gdA.util.mutateTo(b[c], gdS)
            }
            else 
                this.gd$when = [];
            this.gd$transparency = gdA.util.mutateTo(this.gd$transparency, gd1f);
            this.gd$visibility = gdA.util.mutateTo(this.gd$visibility, gd4f)
        }
        var d = ["app$control", "app$edited", "rights"];
        for (var c = 0; c < d[gdj]; c++) {
            var e = d[c];
            e in this && !gdu(this[e]) && delete this[e]
        }
    };
    gdv("google.gdata.EventEntry", gdW);
    gdW.c(gdL);
    gdW[gd].d = gdA.namespace.GD;
    gdv("google.gdata.EventEntry.prototype.xmlns$gd", gdW[gd].d);
    gdW[gd].Z = gdA.opensearch.namespace.OPENSEARCH;
    gdv("google.gdata.EventEntry.prototype.xmlns$openSearch", gdW[gd].Z);
    gdW[gd].Cc = function(){
        return this.gd$comments
    };
    gdv("google.gdata.EventEntry.prototype.getComments", gdW[gd].Cc);
    gdW[gd].wb = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Da(a);
        this.gd$comments = a
    };
    gdv("google.gdata.EventEntry.prototype.setComments", gdW[gd].wb);
    gdW[gd].Ic = function(){
        return this.gd$eventStatus
    };
    gdv("google.gdata.EventEntry.prototype.getEventStatus", gdW[gd].Ic);
    gdW[gd].Ab = function(a){
        if (a && a[gdl] === gde) 
            a = new gdgf(a);
        this.gd$eventStatus = a
    };
    gdv("google.gdata.EventEntry.prototype.setEventStatus", gdW[gd].Ab);
    gdW[gd].Oc = function(){
        return this.gd$where
    };
    gdv("google.gdata.EventEntry.prototype.getLocations", gdW[gd].Oc);
    gdW[gd].Eb = function(a){
        this.gd$where = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.hb(a[b])
    };
    gdv("google.gdata.EventEntry.prototype.setLocations", gdW[gd].Eb);
    gdW[gd].hb = function(a){
        if (a[gdl] === gde) 
            a = new gdT(a);
        this.gd$where[gdi](a)
    };
    gdv("google.gdata.EventEntry.prototype.addLocation", gdW[gd].hb);
    gdW[gd].Qc = function(){
        return this.gd$originalEvent
    };
    gdv("google.gdata.EventEntry.prototype.getOriginalEvent", gdW[gd].Qc);
    gdW[gd].Gb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdog(a);
        this.gd$originalEvent = a
    };
    gdv("google.gdata.EventEntry.prototype.setOriginalEvent", gdW[gd].Gb);
    gdW[gd].oi = function(){
        return this.gd$who
    };
    gdv("google.gdata.EventEntry.prototype.getParticipants", gdW[gd].oi);
    gdW[gd].Wf = function(a){
        this.gd$who = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.De(a[b])
    };
    gdv("google.gdata.EventEntry.prototype.setParticipants", gdW[gd].Wf);
    gdW[gd].De = function(a){
        if (a[gdl] === gde) 
            a = new this.Pd(a);
        this.gd$who[gdi](a)
    };
    gdv("google.gdata.EventEntry.prototype.addParticipant", gdW[gd].De);
    gdW[gd].Ei = function(){
        return this.gd$recurrence
    };
    gdv("google.gdata.EventEntry.prototype.getRecurrence", gdW[gd].Ei);
    gdW[gd].gg = function(a){
        if (a &&
        a[gdl] === gde) 
            a = new gd0f(a);
        this.gd$recurrence = a
    };
    gdv("google.gdata.EventEntry.prototype.setRecurrence", gdW[gd].gg);
    gdW[gd].Fi = function(){
        return this.gd$recurrenceException
    };
    gdv("google.gdata.EventEntry.prototype.getRecurrenceException", gdW[gd].Fi);
    gdW[gd].hg = function(a){
        this.gd$recurrenceException = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Ge(a[b])
    };
    gdv("google.gdata.EventEntry.prototype.setRecurrenceException", gdW[gd].hg);
    gdW[gd].Ge = function(a){
        if (a[gdl] === gde) 
            a = new this.Qd(a);
        this.gd$recurrenceException[gdi](a)
    };
    gdv("google.gdata.EventEntry.prototype.addRecurrenceException", gdW[gd].Ge);
    gdW[gd].Li = function(){
        return this.gd$reminder
    };
    gdv("google.gdata.EventEntry.prototype.getReminders", gdW[gd].Li);
    gdW[gd].jg = function(a){
        this.gd$reminder = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ib(a[b])
    };
    gdv("google.gdata.EventEntry.prototype.setReminders", gdW[gd].jg);
    gdW[gd].ib = function(a){
        if (a[gdl] === gde) 
            a = new gdR(a);
        this.gd$reminder[gdi](a)
    };
    gdv("google.gdata.EventEntry.prototype.addReminder", gdW[gd].ib);
    gdW[gd].fj = function(){
        return this.gd$when
    };
    gdv("google.gdata.EventEntry.prototype.getTimes", gdW[gd].fj);
    gdW[gd].xg = function(a){
        this.gd$when = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.He(a[b])
    };
    gdv("google.gdata.EventEntry.prototype.setTimes", gdW[gd].xg);
    gdW[gd].He = function(a){
        if (a[gdl] === gde) 
            a = new gdS(a);
        this.gd$when[gdi](a)
    };
    gdv("google.gdata.EventEntry.prototype.addTime", gdW[gd].He);
    gdW[gd].jd = function(){
        return this.gd$transparency
    };
    gdv("google.gdata.EventEntry.prototype.getTransparency", gdW[gd].jd);
    gdW[gd].Ub = function(a){
        if (a && a[gdl] === gde) 
            a = new gd1f(a);
        this.gd$transparency = a
    };
    gdv("google.gdata.EventEntry.prototype.setTransparency", gdW[gd].Ub);
    gdW[gd].nd = function(){
        return this.gd$visibility
    };
    gdv("google.gdata.EventEntry.prototype.getVisibility", gdW[gd].nd);
    gdW[gd].Xb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd4f(a);
        this.gd$visibility = a
    };
    gdv("google.gdata.EventEntry.prototype.setVisibility", gdW[gd].Xb);
    var gdrg = function(a){
        if (!gdu(this.m)) 
            this.m = gdW;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.EventFeed", gdrg);
    gdrg.c(gdM);
    gdrg[gd].d = gdA.namespace.GD;
    gdv("google.gdata.EventFeed.prototype.xmlns$gd", gdrg[gd].d);
    gdA.params = {};
    gdA.params.ALT = "alt";
    gdA.params.AUTHOR = "author";
    gdA.params.MAX_RESULTS = "max-results";
    gdA.params.PUBLISHED_MAX = "published-max";
    gdA.params.PUBLISHED_MIN = "published-min";
    gdA.params.Q = "q";
    gdA.params.START_INDEX = "start-index";
    gdA.params.UPDATED_MAX = "updated-max";
    gdA.params.UPDATED_MIN = "updated-min";
    gdlg[gd].de = function(){
        return gdN
    };
    gdv("google.gdata.Comments.prototype.getFeedLinkClass", gdlg[gd].de);
    gdL[gd].wh = function(){
        return gdNe
    };
    gdv("google.gdata.Entry.prototype.getControlClass", gdL[gd].wh);
    gdW[gd].kb = function(){
        return gdlg
    };
    gdv("google.gdata.EventEntry.prototype.getCommentsClass", gdW[gd].kb);
    gdW[gd].nb = function(){
        return gdU
    };
    gdv("google.gdata.EventEntry.prototype.getWhoClass", gdW[gd].nb);
    gdW[gd].ge = function(){
        return gdqg
    };
    gdv("google.gdata.EventEntry.prototype.getRecurrenceExceptionClass", gdW[gd].ge);
    gdrg[gd].t = function(){
        return gdW
    };
    gdM[gd].t = function(){
        return gdL
    };
    gdpg[gd].t = function(){
        return gdV
    };
    gdV[gd].kb = function(){
        return gdlg
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getCommentsClass", gdV[gd].kb);
    gdV[gd].nb = function(){
        return gdU
    };
    gdv("google.gdata.RecurrenceExceptionEntry.prototype.getWhoClass", gdV[gd].nb);
    gdA.acl = {};
    gdA.acl.namespace = {};
    gdA.acl.namespace.GACL = "http://schemas.google.com/acl/2007";
    var gdsg = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.acl.AclKind", gdsg);
    gdsg.c(gdzf);
    var gdtg = gdA.acl.namespace.GACL + "#accessRule";
    gdv("google.gdata.acl.AclKind.TERM_ACCESSRULE", gdtg);
    var gdug = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.acl.AclRole", gdug);
    gdug[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.acl.AclRole.prototype.getValue", gdug[gd].b);
    gdug[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.acl.AclRole.prototype.setValue", gdug[gd].a);
    gdv("google.gdata.acl.AclRole.VALUE_NONE", "none");
    gdv("google.gdata.acl.AclRole.VALUE_OWNER", "owner");
    gdv("google.gdata.acl.AclRole.VALUE_PEEKER", "peeker");
    gdv("google.gdata.acl.AclRole.VALUE_READER", "reader");
    gdv("google.gdata.acl.AclRole.VALUE_WRITER", "writer");
    var gdvg = function(a){
        if (a) {
            gdh(this, a[gdt]);
            gdg(this, a[gdm])
        }
        else {
            gdh(this, this[gdt]);
            gdg(this, this[gdm])
        }
    };
    gdv("google.gdata.acl.AclScope", gdvg);
    gdvg[gd].U = function(){
        return this[gdt]
    };
    gdv("google.gdata.acl.AclScope.prototype.getType", gdvg[gd].U);
    gdvg[gd].G = function(a){
        gdh(this, a)
    };
    gdv("google.gdata.acl.AclScope.prototype.setType", gdvg[gd].G);
    gdv("google.gdata.acl.AclScope.TYPE_DEFAULT", "default");
    gdv("google.gdata.acl.AclScope.TYPE_DOMAIN", "domain");
    gdv("google.gdata.acl.AclScope.TYPE_USER", "user");
    gdvg[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.acl.AclScope.prototype.getValue", gdvg[gd].b);
    gdvg[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.acl.AclScope.prototype.setValue", gdvg[gd].a);
    var gdwg = function(a){
        var b = new gdvg;
        if (a) {
            b.a(a);
            b.G(a[gdo]("@") == -1 ? "domain" : "user")
        }
        else 
            b.G("default");
        return b
    };
    gdv("google.gdata.acl.AclScope.create", gdwg);
    var gdxg = function(a){
        gdBf[gdq](this, a)
    };
    gdv("google.gdata.acl.Link", gdxg);
    gdxg.c(gdBf);
    var gdyg = gdA.acl.namespace.GACL + "#accessControlList";
    gdv("google.gdata.acl.Link.REL_ACCESS_CONTROL_LIST", gdyg);
    var gdzg = gdA.acl.namespace.GACL + "#controlledObject";
    gdv("google.gdata.acl.Link.REL_CONTROLLED_OBJECT", gdzg);
    var gdAg = function(a){
        if (!gdu(this.Rd)) 
            this.Rd = gdug;
        gdL[gdq](this, a);
        if (a) {
            this.lg(a.role);
            this.mg(a.scope)
        }
        else {
            this.gAcl$role = gdA.util.mutateTo(this.gAcl$role, this.Rd);
            this.gAcl$scope = gdA.util.mutateTo(this.gAcl$scope, gdvg)
        }
        var b = ["app$control", "app$edited", "published", "rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.acl.AclEntry", gdAg);
    gdAg.c(gdL);
    gdAg[gd].zd = gdA.acl.namespace.GACL;
    gdv("google.gdata.acl.AclEntry.prototype.xmlns$gAcl", gdAg[gd].zd);
    gdAg[gd].Pi = function(){
        return this.gAcl$role
    };
    gdv("google.gdata.acl.AclEntry.prototype.getRole", gdAg[gd].Pi);
    gdAg[gd].lg = function(a){
        if (a && a[gdl] === gde) 
            a = new this.Rd(a);
        this.gAcl$role = a
    };
    gdv("google.gdata.acl.AclEntry.prototype.setRole", gdAg[gd].lg);
    gdAg[gd].Ri = function(){
        return this.gAcl$scope
    };
    gdv("google.gdata.acl.AclEntry.prototype.getScope", gdAg[gd].Ri);
    gdAg[gd].mg = function(a){
        if (a && a[gdl] === gde) 
            a = new gdvg(a);
        this.gAcl$scope = a
    };
    gdv("google.gdata.acl.AclEntry.prototype.setScope", gdAg[gd].mg);
    var gdBg = function(a){
        if (!gdu(this.m)) 
            this.m = gdAg;
        gdM[gdq](this, a);
        var b = ["xml$base", "openSearch$itemsPerPage", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.acl.AclFeed", gdBg);
    gdBg.c(gdM);
    gdBg[gd].zd = gdA.acl.namespace.GACL;
    gdv("google.gdata.acl.AclFeed.prototype.xmlns$gAcl", gdBg[gd].zd);
    gdv("google.gdata.AclEntry", gdAg);
    gdv("google.gdata.AclFeed", gdBg);
    gdv("google.gdata.AclKind", gdsg);
    gdv("google.gdata.AclRole", gdug);
    gdv("google.gdata.AclScope", gdvg);
    gdv("google.gdata.Link.REL_ACCESS_CONTROL_LIST", gdyg);
    gdv("google.gdata.Link.REL_CONTROLLED_OBJECT", gdzg);
    gdAg[gd].Xd = function(){
        return gdug
    };
    gdv("google.gdata.acl.AclEntry.prototype.getAclRoleClass", gdAg[gd].Xd);
    gdBg[gd].t = function(){
        return gdAg
    };
    gdA.threading = {};
    gdA.threading.namespace = {};
    gdA.threading.namespace.THR = "http://purl.org/syndication/thread/1.0";
    var gdCg = function(a){
        if (a) {
            gdra(this, a[gdr]);
            this.ref = a.ref;
            this.source = a.source;
            gdh(this, a[gdt])
        }
        else {
            gdra(this, this[gdr]);
            this.ref = this.ref;
            this.source = this.source;
            gdh(this, this[gdt])
        }
    };
    gdv("google.gdata.threading.InReplyTo", gdCg);
    gdCg[gd].J = function(){
        return this[gdr]
    };
    gdv("google.gdata.threading.InReplyTo.prototype.getHref", gdCg[gd].J);
    gdCg[gd].D = function(a){
        gdra(this, a)
    };
    gdv("google.gdata.threading.InReplyTo.prototype.setHref", gdCg[gd].D);
    gdCg[gd].Ii = function(){
        return this.ref
    };
    gdv("google.gdata.threading.InReplyTo.prototype.getRef", gdCg[gd].Ii);
    gdCg[gd].ek = function(a){
        this.ref = a
    };
    gdv("google.gdata.threading.InReplyTo.prototype.setRef", gdCg[gd].ek);
    gdCg[gd].Xi = function(){
        return this.source
    };
    gdv("google.gdata.threading.InReplyTo.prototype.getSource", gdCg[gd].Xi);
    gdCg[gd].hk = function(a){
        this.source = a
    };
    gdv("google.gdata.threading.InReplyTo.prototype.setSource", gdCg[gd].hk);
    gdCg[gd].U = function(){
        return this[gdt]
    };
    gdv("google.gdata.threading.InReplyTo.prototype.getType", gdCg[gd].U);
    gdCg[gd].G = function(a){
        gdh(this, a)
    };
    gdv("google.gdata.threading.InReplyTo.prototype.setType", gdCg[gd].G);
    gdA.onLoad = function(){
        gdoe()
    };
    gdv("google.gdata.onLoad", gdA.onLoad);
    gdkb(gdcb.GData_API_callback) && gdcb.GData_API_callback();
    
    gdA.finance = {};
    gdA.finance.namespace = {};
    gdA.finance.namespace.GF = "http://schemas.google.com/finance/2007";
    var gdzh = function(a){
        if (a) 
            this.s(a.money);
        else 
            if (this.gd$money) {
                var b = this.gd$money;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$money[c] = gdA.util.mutateTo(b[c], gdGf)
            }
            else 
                this.gd$money = []
    };
    gdv("google.gdata.finance.Commission", gdzh);
    gdzh[gd].K = function(){
        return this.gd$money
    };
    gdv("google.gdata.finance.Commission.prototype.getMoney", gdzh[gd].K);
    gdzh[gd].s = function(a){
        this.gd$money = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.q(a[b])
    };
    gdv("google.gdata.finance.Commission.prototype.setMoney", gdzh[gd].s);
    gdzh[gd].q = function(a){
        if (a[gdl] ===
        gde) 
            a = new gdGf(a);
        this.gd$money[gdi](a)
    };
    gdv("google.gdata.finance.Commission.prototype.addMoney", gdzh[gd].q);
    var gdAh = function(a){
        if (a) 
            this.s(a.money);
        else 
            if (this.gd$money) {
                var b = this.gd$money;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$money[c] = gdA.util.mutateTo(b[c], gdGf)
            }
            else 
                this.gd$money = []
    };
    gdv("google.gdata.finance.CostBasis", gdAh);
    gdAh[gd].K = function(){
        return this.gd$money
    };
    gdv("google.gdata.finance.CostBasis.prototype.getMoney", gdAh[gd].K);
    gdAh[gd].s = function(a){
        this.gd$money = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.q(a[b])
    };
    gdv("google.gdata.finance.CostBasis.prototype.setMoney", gdAh[gd].s);
    gdAh[gd].q = function(a){
        if (a[gdl] ===
        gde) 
            a = new gdGf(a);
        this.gd$money[gdi](a)
    };
    gdv("google.gdata.finance.CostBasis.prototype.addMoney", gdAh[gd].q);
    var gdBh = function(a){
        if (a) 
            this.s(a.money);
        else 
            if (this.gd$money) {
                var b = this.gd$money;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$money[c] = gdA.util.mutateTo(b[c], gdGf)
            }
            else 
                this.gd$money = []
    };
    gdv("google.gdata.finance.DaysGain", gdBh);
    gdBh[gd].K = function(){
        return this.gd$money
    };
    gdv("google.gdata.finance.DaysGain.prototype.getMoney", gdBh[gd].K);
    gdBh[gd].s = function(a){
        this.gd$money = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.q(a[b])
    };
    gdv("google.gdata.finance.DaysGain.prototype.setMoney", gdBh[gd].s);
    gdBh[gd].q = function(a){
        if (a[gdl] ===
        gde) 
            a = new gdGf(a);
        this.gd$money[gdi](a)
    };
    gdv("google.gdata.finance.DaysGain.prototype.addMoney", gdBh[gd].q);
    var gdCh = function(a){
        if (a) 
            this.s(a.money);
        else 
            if (this.gd$money) {
                var b = this.gd$money;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$money[c] = gdA.util.mutateTo(b[c], gdGf)
            }
            else 
                this.gd$money = []
    };
    gdv("google.gdata.finance.Gain", gdCh);
    gdCh[gd].K = function(){
        return this.gd$money
    };
    gdv("google.gdata.finance.Gain.prototype.getMoney", gdCh[gd].K);
    gdCh[gd].s = function(a){
        this.gd$money = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.q(a[b])
    };
    gdv("google.gdata.finance.Gain.prototype.setMoney", gdCh[gd].s);
    gdCh[gd].q = function(a){
        if (a[gdl] ===
        gde) 
            a = new gdGf(a);
        this.gd$money[gdi](a)
    };
    gdv("google.gdata.finance.Gain.prototype.addMoney", gdCh[gd].q);
    var gdDh = function(a){
        if (a) 
            this.s(a.money);
        else 
            if (this.gd$money) {
                var b = this.gd$money;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$money[c] = gdA.util.mutateTo(b[c], gdGf)
            }
            else 
                this.gd$money = []
    };
    gdv("google.gdata.finance.MarketValue", gdDh);
    gdDh[gd].K = function(){
        return this.gd$money
    };
    gdv("google.gdata.finance.MarketValue.prototype.getMoney", gdDh[gd].K);
    gdDh[gd].s = function(a){
        this.gd$money = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.q(a[b])
    };
    gdv("google.gdata.finance.MarketValue.prototype.setMoney", gdDh[gd].s);
    gdDh[gd].q = function(a){
        if (a[gdl] === gde) 
            a = new gdGf(a);
        this.gd$money[gdi](a)
    };
    gdv("google.gdata.finance.MarketValue.prototype.addMoney", gdDh[gd].q);
    var gd8 = function(a){
        if (a) {
            this.yb(a.costBasis);
            this.currencyCode = a.currencyCode;
            this.zb(a.daysGain);
            this.Bb(a.gain);
            this.Cb(a.gainPercentage);
            this.Fb(a.marketValue);
            this.Hb(a.return1w);
            this.Ib(a.return1y);
            this.Jb(a.return3m);
            this.Kb(a.return3y);
            this.Lb(a.return4w);
            this.Mb(a.return5y);
            this.Nb(a.returnOverall);
            this.Ob(a.returnYTD)
        }
        else {
            this.gf$costBasis = gdA.util.mutateTo(this.gf$costBasis, gdAh);
            this.currencyCode = this.currencyCode;
            this.gf$daysGain = gdA.util.mutateTo(this.gf$daysGain, gdBh);
            this.gf$gain = gdA.util.mutateTo(this.gf$gain, gdCh);
            this.gainPercentage = this.gainPercentage;
            this.gf$marketValue = gdA.util.mutateTo(this.gf$marketValue, gdDh);
            this.return1w = this.return1w;
            this.return1y = this.return1y;
            this.return3m = this.return3m;
            this.return3y = this.return3y;
            this.return4w = this.return4w;
            this.return5y = this.return5y;
            this.returnOverall = this.returnOverall;
            this.returnYTD = this.returnYTD
        }
    };
    gdv("google.gdata.finance.PortfolioData", gd8);
    gd8[gd].Ec = function(){
        return this.gf$costBasis
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getCostBasis", gd8[gd].Ec);
    gd8[gd].yb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdAh(a);
        this.gf$costBasis = a
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setCostBasis", gd8[gd].yb);
    gd8[gd].Fc = function(){
        return this.currencyCode
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getCurrencyCode", gd8[gd].Fc);
    gd8[gd].ud = function(a){
        this.currencyCode = a
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setCurrencyCode", gd8[gd].ud);
    gd8[gd].Gc = function(){
        return this.gf$daysGain
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getDaysGain", gd8[gd].Gc);
    gd8[gd].zb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdBh(a);
        this.gf$daysGain = a
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setDaysGain", gd8[gd].zb);
    gd8[gd].Kc = function(){
        return this.gf$gain
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getGain", gd8[gd].Kc);
    gd8[gd].Bb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdCh(a);
        this.gf$gain = a
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setGain", gd8[gd].Bb);
    gd8[gd].Lc = function(){
        return this.gainPercentage === gda ? gda : gdd(this.gainPercentage)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getGainPercentage", gd8[gd].Lc);
    gd8[gd].Cb = function(a){
        this.gainPercentage = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setGainPercentage", gd8[gd].Cb);
    gd8[gd].Pc = function(){
        return this.gf$marketValue
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getMarketValue", gd8[gd].Pc);
    gd8[gd].Fb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdDh(a);
        this.gf$marketValue = a
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setMarketValue", gd8[gd].Fb);
    gd8[gd].Tc = function(){
        return this.return1w === gda ? gda : gdd(this.return1w)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturn1w", gd8[gd].Tc);
    gd8[gd].Hb = function(a){
        this.return1w = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturn1w", gd8[gd].Hb);
    gd8[gd].Uc = function(){
        return this.return1y === gda ? gda : gdd(this.return1y)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturn1y", gd8[gd].Uc);
    gd8[gd].Ib = function(a){
        this.return1y = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturn1y", gd8[gd].Ib);
    gd8[gd].Vc = function(){
        return this.return3m === gda ? gda : gdd(this.return3m)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturn3m", gd8[gd].Vc);
    gd8[gd].Jb = function(a){
        this.return3m = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturn3m", gd8[gd].Jb);
    gd8[gd].Wc = function(){
        return this.return3y === gda ? gda : gdd(this.return3y)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturn3y", gd8[gd].Wc);
    gd8[gd].Kb = function(a){
        this.return3y = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturn3y", gd8[gd].Kb);
    gd8[gd].Xc = function(){
        return this.return4w === gda ? gda : gdd(this.return4w)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturn4w", gd8[gd].Xc);
    gd8[gd].Lb = function(a){
        this.return4w = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturn4w", gd8[gd].Lb);
    gd8[gd].Yc = function(){
        return this.return5y === gda ? gda : gdd(this.return5y)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturn5y", gd8[gd].Yc);
    gd8[gd].Mb = function(a){
        this.return5y = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturn5y", gd8[gd].Mb);
    gd8[gd].Zc = function(){
        return this.returnOverall === gda ? gda : gdd(this.returnOverall)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturnOverall", gd8[gd].Zc);
    gd8[gd].Nb = function(a){
        this.returnOverall = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturnOverall", gd8[gd].Nb);
    gd8[gd].$c = function(){
        return this.returnYTD === gda ? gda : gdd(this.returnYTD)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.getReturnYTD", gd8[gd].$c);
    gd8[gd].Ob = function(a){
        this.returnYTD = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PortfolioData.prototype.setReturnYTD", gd8[gd].Ob);
    var gdEh = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PortfolioKind", gdEh);
    gdEh.c(gdzf);
    var gdFh = gdA.finance.namespace.GF + "#portfolio";
    gdv("google.gdata.finance.PortfolioKind.TERM_PORTFOLIO", gdFh);
    var gd9 = function(a){
        if (a) {
            this.yb(a.costBasis);
            this.zb(a.daysGain);
            this.Bb(a.gain);
            this.Cb(a.gainPercentage);
            this.Fb(a.marketValue);
            this.Hb(a.return1w);
            this.Ib(a.return1y);
            this.Jb(a.return3m);
            this.Kb(a.return3y);
            this.Lb(a.return4w);
            this.Mb(a.return5y);
            this.Nb(a.returnOverall);
            this.Ob(a.returnYTD);
            this.Rb(a.shares)
        }
        else {
            this.gf$costBasis = gdA.util.mutateTo(this.gf$costBasis, gdAh);
            this.gf$daysGain = gdA.util.mutateTo(this.gf$daysGain, gdBh);
            this.gf$gain = gdA.util.mutateTo(this.gf$gain, gdCh);
            this.gainPercentage = this.gainPercentage;
            this.gf$marketValue = gdA.util.mutateTo(this.gf$marketValue, gdDh);
            this.return1w = this.return1w;
            this.return1y = this.return1y;
            this.return3m = this.return3m;
            this.return3y = this.return3y;
            this.return4w = this.return4w;
            this.return5y = this.return5y;
            this.returnOverall = this.returnOverall;
            this.returnYTD = this.returnYTD;
            this.shares = this.shares
        }
    };
    gdv("google.gdata.finance.PositionData", gd9);
    gd9[gd].Ec = function(){
        return this.gf$costBasis
    };
    gdv("google.gdata.finance.PositionData.prototype.getCostBasis", gd9[gd].Ec);
    gd9[gd].yb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdAh(a);
        this.gf$costBasis = a
    };
    gdv("google.gdata.finance.PositionData.prototype.setCostBasis", gd9[gd].yb);
    gd9[gd].Gc = function(){
        return this.gf$daysGain
    };
    gdv("google.gdata.finance.PositionData.prototype.getDaysGain", gd9[gd].Gc);
    gd9[gd].zb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdBh(a);
        this.gf$daysGain = a
    };
    gdv("google.gdata.finance.PositionData.prototype.setDaysGain", gd9[gd].zb);
    gd9[gd].Kc = function(){
        return this.gf$gain
    };
    gdv("google.gdata.finance.PositionData.prototype.getGain", gd9[gd].Kc);
    gd9[gd].Bb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdCh(a);
        this.gf$gain = a
    };
    gdv("google.gdata.finance.PositionData.prototype.setGain", gd9[gd].Bb);
    gd9[gd].Lc = function(){
        return this.gainPercentage === gda ? gda : gdd(this.gainPercentage)
    };
    gdv("google.gdata.finance.PositionData.prototype.getGainPercentage", gd9[gd].Lc);
    gd9[gd].Cb = function(a){
        this.gainPercentage = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setGainPercentage", gd9[gd].Cb);
    gd9[gd].Pc = function(){
        return this.gf$marketValue
    };
    gdv("google.gdata.finance.PositionData.prototype.getMarketValue", gd9[gd].Pc);
    gd9[gd].Fb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdDh(a);
        this.gf$marketValue = a
    };
    gdv("google.gdata.finance.PositionData.prototype.setMarketValue", gd9[gd].Fb);
    gd9[gd].Tc = function(){
        return this.return1w === gda ? gda : gdd(this.return1w)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturn1w", gd9[gd].Tc);
    gd9[gd].Hb = function(a){
        this.return1w = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturn1w", gd9[gd].Hb);
    gd9[gd].Uc = function(){
        return this.return1y === gda ? gda : gdd(this.return1y)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturn1y", gd9[gd].Uc);
    gd9[gd].Ib = function(a){
        this.return1y = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturn1y", gd9[gd].Ib);
    gd9[gd].Vc = function(){
        return this.return3m === gda ? gda : gdd(this.return3m)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturn3m", gd9[gd].Vc);
    gd9[gd].Jb = function(a){
        this.return3m = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturn3m", gd9[gd].Jb);
    gd9[gd].Wc = function(){
        return this.return3y === gda ? gda : gdd(this.return3y)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturn3y", gd9[gd].Wc);
    gd9[gd].Kb = function(a){
        this.return3y = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturn3y", gd9[gd].Kb);
    gd9[gd].Xc = function(){
        return this.return4w === gda ? gda : gdd(this.return4w)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturn4w", gd9[gd].Xc);
    gd9[gd].Lb = function(a){
        this.return4w = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturn4w", gd9[gd].Lb);
    gd9[gd].Yc = function(){
        return this.return5y === gda ? gda : gdd(this.return5y)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturn5y", gd9[gd].Yc);
    gd9[gd].Mb = function(a){
        this.return5y = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturn5y", gd9[gd].Mb);
    gd9[gd].Zc = function(){
        return this.returnOverall === gda ? gda : gdd(this.returnOverall)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturnOverall", gd9[gd].Zc);
    gd9[gd].Nb = function(a){
        this.returnOverall = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturnOverall", gd9[gd].Nb);
    gd9[gd].$c = function(){
        return this.returnYTD === gda ? gda : gdd(this.returnYTD)
    };
    gdv("google.gdata.finance.PositionData.prototype.getReturnYTD", gd9[gd].$c);
    gd9[gd].Ob = function(a){
        this.returnYTD = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setReturnYTD", gd9[gd].Ob);
    gd9[gd].dd = function(){
        return this.shares === gda ? gda : gdd(this.shares)
    };
    gdv("google.gdata.finance.PositionData.prototype.getShares", gd9[gd].dd);
    gd9[gd].Rb = function(a){
        this.shares = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.PositionData.prototype.setShares", gd9[gd].Rb);
    var gdGh = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PositionKind", gdGh);
    gdGh.c(gdzf);
    var gdHh = gdA.finance.namespace.GF + "#position";
    gdv("google.gdata.finance.PositionKind.TERM_POSITION", gdHh);
    var gdIh = function(a){
        if (a) 
            this.s(a.money);
        else 
            if (this.gd$money) {
                var b = this.gd$money;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$money[c] = gdA.util.mutateTo(b[c], gdGf)
            }
            else 
                this.gd$money = []
    };
    gdv("google.gdata.finance.Price", gdIh);
    gdIh[gd].K = function(){
        return this.gd$money
    };
    gdv("google.gdata.finance.Price.prototype.getMoney", gdIh[gd].K);
    gdIh[gd].s = function(a){
        this.gd$money = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.q(a[b])
    };
    gdv("google.gdata.finance.Price.prototype.setMoney", gdIh[gd].s);
    gdIh[gd].q = function(a){
        if (a[gdl] ===
        gde) 
            a = new gdGf(a);
        this.gd$money[gdi](a)
    };
    gdv("google.gdata.finance.Price.prototype.addMoney", gdIh[gd].q);
    var gdJh = function(a){
        if (a) {
            this.exchange = a.exchange;
            this.fullName = a.fullName;
            this.symbol = a.symbol
        }
        else {
            this.exchange = this.exchange;
            this.fullName = this.fullName;
            this.symbol = this.symbol
        }
    };
    gdv("google.gdata.finance.Symbol", gdJh);
    gdJh[gd].Gh = function(){
        return this.exchange
    };
    gdv("google.gdata.finance.Symbol.prototype.getExchange", gdJh[gd].Gh);
    gdJh[gd].Mj = function(a){
        this.exchange = a
    };
    gdv("google.gdata.finance.Symbol.prototype.setExchange", gdJh[gd].Mj);
    gdJh[gd].Hh = function(){
        return this.fullName
    };
    gdv("google.gdata.finance.Symbol.prototype.getFullName", gdJh[gd].Hh);
    gdJh[gd].Nj = function(a){
        this.fullName = a
    };
    gdv("google.gdata.finance.Symbol.prototype.setFullName", gdJh[gd].Nj);
    gdJh[gd].fd = function(){
        return this.symbol
    };
    gdv("google.gdata.finance.Symbol.prototype.getSymbol", gdJh[gd].fd);
    gdJh[gd].kc = function(a){
        this.symbol = a
    };
    gdv("google.gdata.finance.Symbol.prototype.setSymbol", gdJh[gd].kc);
    var gd$ = function(a){
        if (a) {
            this.of(a.commission);
            this.setDate(a.date);
            this.notes = a.notes;
            this.cg(a.price);
            this.Rb(a.shares);
            gdh(this, a[gdt])
        }
        else {
            this.gf$commission = gdA.util.mutateTo(this.gf$commission, gdzh);
            this.date = this.date;
            this.notes = this.notes;
            this.gf$price = gdA.util.mutateTo(this.gf$price, gdIh);
            this.shares = this.shares;
            gdh(this, this[gdt])
        }
    };
    gdv("google.gdata.finance.TransactionData", gd$);
    gd$[gd].nh = function(){
        return this.gf$commission
    };
    gdv("google.gdata.finance.TransactionData.prototype.getCommission", gd$[gd].nh);
    gd$[gd].of = function(a){
        if (a && a[gdl] === gde) 
            a = new gdzh(a);
        this.gf$commission = a
    };
    gdv("google.gdata.finance.TransactionData.prototype.setCommission", gd$[gd].of);
    gd$[gd].getDate = function(){
        return this.date === gda ? gda : gdB(this.date)
    };
    gdv("google.gdata.finance.TransactionData.prototype.getDate", gd$[gd].getDate);
    gd$[gd].setDate = function(a){
        this.date = a === gda ? gda : gdre(a)
    };
    gdv("google.gdata.finance.TransactionData.prototype.setDate", gd$[gd].setDate);
    gd$[gd].ei = function(){
        return this.notes
    };
    gdv("google.gdata.finance.TransactionData.prototype.getNotes", gd$[gd].ei);
    gd$[gd].Zj = function(a){
        this.notes = a
    };
    gdv("google.gdata.finance.TransactionData.prototype.setNotes", gd$[gd].Zj);
    gd$[gd].yi = function(){
        return this.gf$price
    };
    gdv("google.gdata.finance.TransactionData.prototype.getPrice", gd$[gd].yi);
    gd$[gd].cg = function(a){
        if (a && a[gdl] === gde) 
            a = new gdIh(a);
        this.gf$price = a
    };
    gdv("google.gdata.finance.TransactionData.prototype.setPrice", gd$[gd].cg);
    gd$[gd].dd = function(){
        return this.shares === gda ? gda : gdd(this.shares)
    };
    gdv("google.gdata.finance.TransactionData.prototype.getShares", gd$[gd].dd);
    gd$[gd].Rb = function(a){
        this.shares = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.finance.TransactionData.prototype.setShares", gd$[gd].Rb);
    gd$[gd].U = function(){
        return this[gdt]
    };
    gdv("google.gdata.finance.TransactionData.prototype.getType", gd$[gd].U);
    gd$[gd].G = function(a){
        gdh(this, a)
    };
    gdv("google.gdata.finance.TransactionData.prototype.setType", gd$[gd].G);
    var gdKh = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.TransactionKind", gdKh);
    gdKh.c(gdzf);
    var gdLh = gdA.finance.namespace.GF + "#transaction";
    gdv("google.gdata.finance.TransactionKind.TERM_TRANSACTION", gdLh);
    var gdMh = function(a){
        gdL[gdq](this, a);
        if (a) 
            this.zg(a.transactionData);
        else 
            this.gf$transactionData = gdA.util.mutateTo(this.gf$transactionData, gd$);
        var b = ["content", "app$control", "app$edited", "published", "rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.TransactionEntry", gdMh);
    gdMh.c(gdL);
    gdMh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.finance.TransactionEntry.prototype.xmlns$gd", gdMh[gd].d);
    gdMh[gd].P = gdA.finance.namespace.GF;
    gdv("google.gdata.finance.TransactionEntry.prototype.xmlns$gf", gdMh[gd].P);
    gdMh[gd].ij = function(){
        return this.gf$transactionData
    };
    gdv("google.gdata.finance.TransactionEntry.prototype.getTransactionData", gdMh[gd].ij);
    gdMh[gd].zg = function(a){
        if (a && a[gdl] === gde) 
            a = new gd$(a);
        this.gf$transactionData = a
    };
    gdv("google.gdata.finance.TransactionEntry.prototype.setTransactionData", gdMh[gd].zg);
    var gdNh = function(a){
        if (!gdu(this.m)) 
            this.m = gdMh;
        gdM[gdq](this, a);
        var b = ["xml$base", "generator", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.TransactionFeed", gdNh);
    gdNh.c(gdM);
    gdNh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.finance.TransactionFeed.prototype.xmlns$gd", gdNh[gd].d);
    gdNh[gd].P = gdA.finance.namespace.GF;
    gdv("google.gdata.finance.TransactionFeed.prototype.xmlns$gf", gdNh[gd].P);
    var gdOh = function(a){
        if (!gdu(this.cb)) 
            this.cb = gdNh;
        gdN[gdq](this, a);
        var b = ["countHint", "readOnly", "rel"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PositionFeedLink", gdOh);
    gdOh.c(gdN);
    var gdPh = function(a){
        gdL[gdq](this, a);
        if (a) {
            this.ta(a.feedLink);
            this.ag(a.positionData);
            this.kc(a.symbol)
        }
        else {
            this.gd$feedLink = gdA.util.mutateTo(this.gd$feedLink, gdOh);
            this.gf$positionData = gdA.util.mutateTo(this.gf$positionData, gd9);
            this.gf$symbol = gdA.util.mutateTo(this.gf$symbol, gdJh)
        }
        var b = ["content", "app$control", "app$edited", "published", "rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PositionEntry", gdPh);
    gdPh.c(gdL);
    gdPh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.finance.PositionEntry.prototype.xmlns$gd", gdPh[gd].d);
    gdPh[gd].P = gdA.finance.namespace.GF;
    gdv("google.gdata.finance.PositionEntry.prototype.xmlns$gf", gdPh[gd].P);
    gdPh[gd].Z = gdA.opensearch.namespace.OPENSEARCH;
    gdv("google.gdata.finance.PositionEntry.prototype.xmlns$openSearch", gdPh[gd].Z);
    gdPh[gd].I = function(){
        return this.gd$feedLink
    };
    gdv("google.gdata.finance.PositionEntry.prototype.getFeedLink", gdPh[gd].I);
    gdPh[gd].ta = function(a){
        if (a && a[gdl] === gde) 
            a = new gdOh(a);
        this.gd$feedLink = a
    };
    gdv("google.gdata.finance.PositionEntry.prototype.setFeedLink", gdPh[gd].ta);
    gdPh[gd].ti = function(){
        return this.gf$positionData
    };
    gdv("google.gdata.finance.PositionEntry.prototype.getPositionData", gdPh[gd].ti);
    gdPh[gd].ag = function(a){
        if (a && a[gdl] === gde) 
            a = new gd9(a);
        this.gf$positionData = a
    };
    gdv("google.gdata.finance.PositionEntry.prototype.setPositionData", gdPh[gd].ag);
    gdPh[gd].fd = function(){
        return this.gf$symbol
    };
    gdv("google.gdata.finance.PositionEntry.prototype.getSymbol", gdPh[gd].fd);
    gdPh[gd].kc = function(a){
        if (a && a[gdl] === gde) 
            a = new gdJh(a);
        this.gf$symbol = a
    };
    gdv("google.gdata.finance.PositionEntry.prototype.setSymbol", gdPh[gd].kc);
    var gdQh = function(a){
        if (!gdu(this.m)) 
            this.m = gdPh;
        gdM[gdq](this, a);
        var b = ["xml$base", "generator", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PositionFeed", gdQh);
    gdQh.c(gdM);
    gdQh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.finance.PositionFeed.prototype.xmlns$gd", gdQh[gd].d);
    gdQh[gd].P = gdA.finance.namespace.GF;
    gdv("google.gdata.finance.PositionFeed.prototype.xmlns$gf", gdQh[gd].P);
    var gdRh = function(a){
        if (!gdu(this.cb)) 
            this.cb = gdQh;
        gdN[gdq](this, a);
        var b = ["countHint", "readOnly", "rel"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PortfolioFeedLink", gdRh);
    gdRh.c(gdN);
    var gdSh = function(a){
        gdL[gdq](this, a);
        if (a) {
            this.ta(a.feedLink);
            this.$f(a.portfolioData)
        }
        else {
            this.gd$feedLink = gdA.util.mutateTo(this.gd$feedLink, gdRh);
            this.gf$portfolioData = gdA.util.mutateTo(this.gf$portfolioData, gd8)
        }
        var b = ["content", "app$control", "app$edited", "published", "rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PortfolioEntry", gdSh);
    gdSh.c(gdL);
    gdSh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.finance.PortfolioEntry.prototype.xmlns$gd", gdSh[gd].d);
    gdSh[gd].P = gdA.finance.namespace.GF;
    gdv("google.gdata.finance.PortfolioEntry.prototype.xmlns$gf", gdSh[gd].P);
    gdSh[gd].Z = gdA.opensearch.namespace.OPENSEARCH;
    gdv("google.gdata.finance.PortfolioEntry.prototype.xmlns$openSearch", gdSh[gd].Z);
    gdSh[gd].I = function(){
        return this.gd$feedLink
    };
    gdv("google.gdata.finance.PortfolioEntry.prototype.getFeedLink", gdSh[gd].I);
    gdSh[gd].ta = function(a){
        if (a && a[gdl] === gde) 
            a = new gdRh(a);
        this.gd$feedLink = a
    };
    gdv("google.gdata.finance.PortfolioEntry.prototype.setFeedLink", gdSh[gd].ta);
    gdSh[gd].qi = function(){
        return this.gf$portfolioData
    };
    gdv("google.gdata.finance.PortfolioEntry.prototype.getPortfolioData", gdSh[gd].qi);
    gdSh[gd].$f = function(a){
        if (a && a[gdl] === gde) 
            a = new gd8(a);
        this.gf$portfolioData = a
    };
    gdv("google.gdata.finance.PortfolioEntry.prototype.setPortfolioData", gdSh[gd].$f);
    var gdTh = function(a){
        if (!gdu(this.m)) 
            this.m = gdSh;
        gdM[gdq](this, a);
        var b = ["xml$base", "generator", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.finance.PortfolioFeed", gdTh);
    gdTh.c(gdM);
    gdTh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.finance.PortfolioFeed.prototype.xmlns$gd", gdTh[gd].d);
    gdTh[gd].P = gdA.finance.namespace.GF;
    gdv("google.gdata.finance.PortfolioFeed.prototype.xmlns$gf", gdTh[gd].P);
    gdA.finance.params = {};
    gdA.finance.params.POSITIONS = "positions";
    gdA.finance.params.RETURNS = "returns";
    gdA.finance.params.TRANSACTIONS = "transactions";
    var gdUh = function(a){
        gdE[gdq](this, a);
        this.S(gdA.finance.params.POSITIONS, {
            defaultValue: false
        });
        this.S(gdA.finance.params.RETURNS, {
            defaultValue: false
        })
    };
    gdv("google.gdata.finance.PortfolioQuery", gdUh);
    gdUh.c(gdE);
    gdUh[gd].Rj = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.finance.params.POSITIONS, a)
    };
    gdv("google.gdata.finance.PortfolioQuery.prototype.setInlinePositions", gdUh[gd].Rj);
    gdUh[gd].Sh = function(){
        return this.e(gdA.finance.params.POSITIONS)
    };
    gdv("google.gdata.finance.PortfolioQuery.prototype.getInlinePositions", gdUh[gd].Sh);
    gdUh[gd].wd = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.finance.params.RETURNS, a)
    };
    gdv("google.gdata.finance.PortfolioQuery.prototype.setIncludeReturns", gdUh[gd].wd);
    gdUh[gd].Mc = function(){
        return this.e(gdA.finance.params.RETURNS)
    };
    gdv("google.gdata.finance.PortfolioQuery.prototype.getIncludeReturns", gdUh[gd].Mc);
    var gdVh = function(a){
        gdE[gdq](this, a);
        this.S(gdA.finance.params.RETURNS, {
            defaultValue: false
        });
        this.S(gdA.finance.params.TRANSACTIONS, {
            defaultValue: false
        })
    };
    gdv("google.gdata.finance.PositionQuery", gdVh);
    gdVh.c(gdE);
    gdVh[gd].wd = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.finance.params.RETURNS, a)
    };
    gdv("google.gdata.finance.PositionQuery.prototype.setIncludeReturns", gdVh[gd].wd);
    gdVh[gd].Mc = function(){
        return this.e(gdA.finance.params.RETURNS)
    };
    gdv("google.gdata.finance.PositionQuery.prototype.getIncludeReturns", gdVh[gd].Mc);
    gdVh[gd].Sj = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.finance.params.TRANSACTIONS, a)
    };
    gdv("google.gdata.finance.PositionQuery.prototype.setInlineTransactions", gdVh[gd].Sj);
    gdVh[gd].Th = function(){
        return this.e(gdA.finance.params.TRANSACTIONS)
    };
    gdv("google.gdata.finance.PositionQuery.prototype.getInlineTransactions", gdVh[gd].Th);
    var gdWh = function(a){
        gdD[gdq](this, "finance", a)
    };
    gdv("google.gdata.finance.FinanceService", gdWh);
    gdWh.c(gdD);
    gdv("google.gdata.finance.FinanceService.SERVICE_NAME", "finance");
    gdWh[gd].si = function(a, b, c){
        return this.H(a, b, c, gdTh)
    };
    gdv("google.gdata.finance.FinanceService.prototype.getPortfolioFeed", gdWh[gd].si);
    gdWh[gd].vi = function(a, b, c){
        return this.H(a, b, c, gdQh)
    };
    gdv("google.gdata.finance.FinanceService.prototype.getPositionFeed", gdWh[gd].vi);
    gdWh[gd].kj = function(a, b, c){
        return this.H(a, b, c, gdNh)
    };
    gdv("google.gdata.finance.FinanceService.prototype.getTransactionFeed", gdWh[gd].kj);
    gdWh[gd].ri = function(a, b, c){
        return this.T(a, b, c, gdSh)
    };
    gdv("google.gdata.finance.FinanceService.prototype.getPortfolioEntry", gdWh[gd].ri);
    gdWh[gd].ui = function(a, b, c){
        return this.T(a, b, c, gdPh)
    };
    gdv("google.gdata.finance.FinanceService.prototype.getPositionEntry", gdWh[gd].ui);
    gdWh[gd].jj = function(a, b, c){
        return this.T(a, b, c, gdMh)
    };
    gdv("google.gdata.finance.FinanceService.prototype.getTransactionEntry", gdWh[gd].jj);
    
    gdA.contacts = {};
    gdA.contacts.namespace = {};
    gdA.contacts.namespace.GCONTACT = "http://schemas.google.com/contact/2008";
    var gdmh = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.contacts.ContactGroupKind", gdmh);
    gdmh.c(gdzf);
    var gdnh = gdA.contacts.namespace.GCONTACT + "#group";
    gdv("google.gdata.contacts.ContactGroupKind.TERM_GROUP", gdnh);
    var gdoh = function(a){
        gdzf[gdq](this, a);
        var b = ["label"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.contacts.ContactKind", gdoh);
    gdoh.c(gdzf);
    var gdph = gdA.contacts.namespace.GCONTACT + "#contact";
    gdv("google.gdata.contacts.ContactKind.TERM_CONTACT", gdph);
    var gdqh = function(a){
        gdBf[gdq](this, a);
        var b = ["hreflang", "xml$lang"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.contacts.ContactLink", gdqh);
    gdqh.c(gdBf);
    var gdrh = "http://schemas.google.com/contacts/2008/rel#photo";
    gdv("google.gdata.contacts.ContactLink.REL_CONTACT_PHOTO", gdrh);
    var gdsh = "http://schemas.google.com/contacts/2008/rel#edit-photo";
    gdv("google.gdata.contacts.ContactLink.REL_EDIT_CONTACT_PHOTO", gdsh);
    gdv("google.gdata.contacts.ContactLink.TYPE_IMAGE", "image/*");
    var gdth = function(a){
        if (a) {
            this.qa(a.deleted);
            gdra(this, a[gdr])
        }
        else {
            this.deleted = this.deleted;
            gdra(this, this[gdr])
        }
    };
    gdv("google.gdata.contacts.GroupMembershipInfo", gdth);
    gdth[gd].Fa = function(){
        return this.deleted === gda ? gda : this.deleted === "true"
    };
    gdv("google.gdata.contacts.GroupMembershipInfo.prototype.getDeleted", gdth[gd].Fa);
    gdth[gd].qa = function(a){
        this.deleted = a === gda ? gda : gdb(a)
    };
    gdv("google.gdata.contacts.GroupMembershipInfo.prototype.setDeleted", gdth[gd].qa);
    gdth[gd].J = function(){
        return this[gdr]
    };
    gdv("google.gdata.contacts.GroupMembershipInfo.prototype.getHref", gdth[gd].J);
    gdth[gd].D = function(a){
        gdra(this, a)
    };
    gdv("google.gdata.contacts.GroupMembershipInfo.prototype.setHref", gdth[gd].D);
    var gduh = function(a){
        this.id = a ? a.id : this.id
    };
    gdv("google.gdata.contacts.SystemGroup", gduh);
    gduh[gd].ja = function(){
        return this.id
    };
    gdv("google.gdata.contacts.SystemGroup.prototype.getId", gduh[gd].ja);
    gduh[gd].ca = function(a){
        this.id = a
    };
    gdv("google.gdata.contacts.SystemGroup.prototype.setId", gduh[gd].ca);
    var gd6 = function(a){
        if (!gdu(this.rc)) 
            this.rc = gdkf;
        if (!gdu(this.j)) 
            this.j = gdqh;
        gdL[gdq](this, a);
        if (a) {
            this.qa(a.deleted);
            this.wf(a.emailAddresses);
            this.sa(a.extendedProperties);
            this.Ff(a.groupMembershipInfos);
            this.If(a.imAddresses);
            this.Tf(a.organizations);
            this.Yf(a.phoneNumbers);
            this.bg(a.postalAddresses)
        }
        else {
            this.gd$deleted = gdA.util.mutateTo(this.gd$deleted, gdaf);
            if (this.gd$email) {
                var b = this.gd$email;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$email[c] = gdA.util.mutateTo(b[c], gdbf)
            }
            else 
                this.gd$email = [];
            if (this.gd$extendedProperty) {
                var b = this.gd$extendedProperty;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$extendedProperty[c] = gdA.util.mutateTo(b[c], this.rc)
            }
            else 
                this.gd$extendedProperty = [];
            if (this.gContact$groupMembershipInfo) {
                var b = this.gContact$groupMembershipInfo;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gContact$groupMembershipInfo[c] = gdA.util.mutateTo(b[c], gdth)
            }
            else 
                this.gContact$groupMembershipInfo = [];
            if (this.gd$im) {
                var b = this.gd$im;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$im[c] = gdA.util.mutateTo(b[c], gdO)
            }
            else 
                this.gd$im = [];
            if (this.gd$organization) {
                var b = this.gd$organization;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$organization[c] = gdA.util.mutateTo(b[c], gdP)
            }
            else 
                this.gd$organization = [];
            if (this.gd$phoneNumber) {
                var b = this.gd$phoneNumber;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$phoneNumber[c] = gdA.util.mutateTo(b[c], gdLf)
            }
            else 
                this.gd$phoneNumber = [];
            if (this.gd$postalAddress) {
                var b = this.gd$postalAddress;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$postalAddress[c] = gdA.util.mutateTo(b[c], gdUf)
            }
            else 
                this.gd$postalAddress = []
        }
        var d = ["app$control", "app$edited", "published", "rights", "summary"];
        for (var c = 0; c < d[gdj]; c++) {
            var e = d[c];
            e in this && !gdu(this[e]) && delete this[e]
        }
    };
    gdv("google.gdata.contacts.ContactEntry", gd6);
    gd6.c(gdL);
    gd6[gd].la = gdA.contacts.namespace.GCONTACT;
    gdv("google.gdata.contacts.ContactEntry.prototype.xmlns$gContact", gd6[gd].la);
    gd6[gd].d = gdA.namespace.GD;
    gdv("google.gdata.contacts.ContactEntry.prototype.xmlns$gd", gd6[gd].d);
    gd6[gd].Fa = function(){
        return this.gd$deleted
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getDeleted", gd6[gd].Fa);
    gd6[gd].qa = function(a){
        if (a &&
        a[gdl] === gde) 
            a = new gdaf(a);
        this.gd$deleted = a
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setDeleted", gd6[gd].qa);
    gd6[gd].Ch = function(){
        return this.gd$email
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getEmailAddresses", gd6[gd].Ch);
    gd6[gd].wf = function(a){
        this.gd$email = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.xe(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setEmailAddresses", gd6[gd].wf);
    gd6[gd].xe = function(a){
        if (a[gdl] === gde) 
            a = new gdbf(a);
        this.gd$email[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addEmailAddress", gd6[gd].xe);
    gd6[gd].Ga = function(){
        return this.gd$extendedProperty
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getExtendedProperties", gd6[gd].Ga);
    gd6[gd].sa = function(a){
        this.gd$extendedProperty = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ma(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setExtendedProperties", gd6[gd].sa);
    gd6[gd].ma = function(a){
        if (a[gdl] === gde) 
            a = new this.rc(a);
        this.gd$extendedProperty[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addExtendedProperty", gd6[gd].ma);
    gd6[gd].Mh = function(){
        return this.gContact$groupMembershipInfo
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getGroupMembershipInfos", gd6[gd].Mh);
    gd6[gd].Ff = function(a){
        this.gContact$groupMembershipInfo = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Ae(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setGroupMembershipInfos", gd6[gd].Ff);
    gd6[gd].Ae = function(a){
        if (a[gdl] === gde) 
            a = new gdth(a);
        this.gContact$groupMembershipInfo[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addGroupMembershipInfo", gd6[gd].Ae);
    gd6[gd].Qh = function(){
        return this.gd$im
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getImAddresses", gd6[gd].Qh);
    gd6[gd].If = function(a){
        this.gd$im = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Be(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setImAddresses", gd6[gd].If);
    gd6[gd].Be = function(a){
        if (a[gdl] === gde) 
            a = new gdO(a);
        this.gd$im[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addImAddress", gd6[gd].Be);
    gd6[gd].ii = function(){
        return this.gd$organization
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getOrganizations", gd6[gd].ii);
    gd6[gd].Tf = function(a){
        this.gd$organization = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Ce(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setOrganizations", gd6[gd].Tf);
    gd6[gd].Ce = function(a){
        if (a[gdl] === gde) 
            a = new gdP(a);
        this.gd$organization[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addOrganization", gd6[gd].Ce);
    gd6[gd].pi = function(){
        return this.gd$phoneNumber
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getPhoneNumbers", gd6[gd].pi);
    gd6[gd].Yf = function(a){
        this.gd$phoneNumber = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Ee(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setPhoneNumbers", gd6[gd].Yf);
    gd6[gd].Ee = function(a){
        if (a[gdl] === gde) 
            a = new gdLf(a);
        this.gd$phoneNumber[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addPhoneNumber", gd6[gd].Ee);
    gd6[gd].xi = function(){
        return this.gd$postalAddress
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getPostalAddresses", gd6[gd].xi);
    gd6[gd].bg = function(a){
        this.gd$postalAddress = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.Fe(a[b])
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.setPostalAddresses", gd6[gd].bg);
    gd6[gd].Fe = function(a){
        if (a[gdl] === gde) 
            a = new gdUf(a);
        this.gd$postalAddress[gdi](a)
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.addPostalAddress", gd6[gd].Fe);
    gd6[gd].oh = function(){
        return this.g(gdsh, "image/*")
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getContactEditPhotoLink", gd6[gd].oh);
    gd6[gd].th = function(){
        return this.g(gdrh, "image/*")
    };
    gdv("google.gdata.contacts.ContactEntry.prototype.getContactPhotoLink", gd6[gd].th);
    var gdvh = function(a){
        if (!gdu(this.m)) 
            this.m = gd6;
        if (!gdu(this.j)) 
            this.j = gdqh;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.contacts.ContactFeed", gdvh);
    gdvh.c(gdM);
    gdvh[gd].la = gdA.contacts.namespace.GCONTACT;
    gdv("google.gdata.contacts.ContactFeed.prototype.xmlns$gContact", gdvh[gd].la);
    gdvh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.contacts.ContactFeed.prototype.xmlns$gd", gdvh[gd].d);
    gdvh[gd].Ha = function(){
        return this.g(gdCf, gdH)
    };
    gdv("google.gdata.contacts.ContactFeed.prototype.getFeedBatchLink", gdvh[gd].Ha);
    gdvh[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.contacts.ContactFeed.prototype.getNextLink", gdvh[gd].w);
    gdvh[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.contacts.ContactFeed.prototype.getPreviousLink", gdvh[gd].z);
    var gdwh = function(a){
        if (!gdu(this.rc)) 
            this.rc = gdkf;
        gdL[gdq](this, a);
        if (a) {
            this.qa(a.deleted);
            this.sa(a.extendedProperties);
            this.vg(a.systemGroup)
        }
        else {
            this.gd$deleted = gdA.util.mutateTo(this.gd$deleted, gdaf);
            if (this.gd$extendedProperty) {
                var b = this.gd$extendedProperty;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$extendedProperty[c] = gdA.util.mutateTo(b[c], this.rc)
            }
            else 
                this.gd$extendedProperty = [];
            this.gContact$systemGroup = gdA.util.mutateTo(this.gContact$systemGroup, gduh)
        }
        var d = ["app$control", "app$edited", "published", "rights", "summary"];
        for (var c = 0; c < d[gdj]; c++) {
            var e = d[c];
            e in this && !gdu(this[e]) && delete this[e]
        }
    };
    gdv("google.gdata.contacts.ContactGroupEntry", gdwh);
    gdwh.c(gdL);
    gdwh[gd].la = gdA.contacts.namespace.GCONTACT;
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.xmlns$gContact", gdwh[gd].la);
    gdwh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.xmlns$gd", gdwh[gd].d);
    gdwh[gd].Fa = function(){
        return this.gd$deleted
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.getDeleted", gdwh[gd].Fa);
    gdwh[gd].qa = function(a){
        if (a && a[gdl] === gde) 
            a = new gdaf(a);
        this.gd$deleted = a
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.setDeleted", gdwh[gd].qa);
    gdwh[gd].Ga = function(){
        return this.gd$extendedProperty
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.getExtendedProperties", gdwh[gd].Ga);
    gdwh[gd].sa = function(a){
        this.gd$extendedProperty = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ma(a[b])
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.setExtendedProperties", gdwh[gd].sa);
    gdwh[gd].ma = function(a){
        if (a[gdl] === gde) 
            a = new this.rc(a);
        this.gd$extendedProperty[gdi](a)
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.addExtendedProperty", gdwh[gd].ma);
    gdwh[gd].cj = function(){
        return this.gContact$systemGroup
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.getSystemGroup", gdwh[gd].cj);
    gdwh[gd].vg = function(a){
        if (a && a[gdl] === gde) 
            a = new gduh(a);
        this.gContact$systemGroup = a
    };
    gdv("google.gdata.contacts.ContactGroupEntry.prototype.setSystemGroup", gdwh[gd].vg);
    var gdxh = function(a){
        if (!gdu(this.m)) 
            this.m = gdwh;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.contacts.ContactGroupFeed", gdxh);
    gdxh.c(gdM);
    gdxh[gd].la = gdA.contacts.namespace.GCONTACT;
    gdv("google.gdata.contacts.ContactGroupFeed.prototype.xmlns$gContact", gdxh[gd].la);
    gdxh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.contacts.ContactGroupFeed.prototype.xmlns$gd", gdxh[gd].d);
    gdxh[gd].Ha = function(){
        return this.g(gdCf, gdH)
    };
    gdv("google.gdata.contacts.ContactGroupFeed.prototype.getFeedBatchLink", gdxh[gd].Ha);
    gdxh[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.contacts.ContactGroupFeed.prototype.getNextLink", gdxh[gd].w);
    gdxh[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.contacts.ContactGroupFeed.prototype.getPreviousLink", gdxh[gd].z);
    gdA.contacts.params = {};
    gdA.contacts.params.ORDERBY = "orderby";
    gdA.contacts.params.SHOWDELETED = "showdeleted";
    gdA.contacts.params.SORTORDER = "sortorder";
    var gd7 = function(a){
        gdE[gdq](this, a);
        this.S(gdA.contacts.params.ORDERBY, {
            defaultValue: "none"
        });
        this.S(gdA.contacts.params.SHOWDELETED, {
            defaultValue: false
        });
        this.S(gdA.contacts.params.SORTORDER, {
            defaultValue: "none"
        });
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.contacts.ContactQuery", gd7);
    gd7.c(gdE);
    gd7[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setMaxResults", gd7[gd].B);
    gd7[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getMaxResults", gd7[gd].v);
    gdv("google.gdata.contacts.ContactQuery.ORDERBY_LAST_MODIFIED", "lastmodified");
    gdv("google.gdata.contacts.ContactQuery.ORDERBY_NONE", "none");
    gd7[gd].Ra = function(a){
        this.f(gdA.contacts.params.ORDERBY, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setOrderBy", gd7[gd].Ra);
    gd7[gd].Ia = function(){
        return this.e(gdA.contacts.params.ORDERBY)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getOrderBy", gd7[gd].Ia);
    gd7[gd].fk = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.contacts.params.SHOWDELETED, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setShowDeleted", gd7[gd].fk);
    gd7[gd].Vi = function(){
        return this.e(gdA.contacts.params.SHOWDELETED)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getShowDeleted", gd7[gd].Vi);
    gdv("google.gdata.contacts.ContactQuery.SORTORDER_ASCENDING", "ascending");
    gdv("google.gdata.contacts.ContactQuery.SORTORDER_DESCENDING", "descending");
    gdv("google.gdata.contacts.ContactQuery.SORTORDER_NONE", "none");
    gd7[gd].xd = function(a){
        this.f(gdA.contacts.params.SORTORDER, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setSortOrder", gd7[gd].xd);
    gd7[gd].ed = function(){
        return this.e(gdA.contacts.params.SORTORDER)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getSortOrder", gd7[gd].ed);
    gd7[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setStartIndex", gd7[gd].o);
    gd7[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getStartIndex", gd7[gd].p);
    gd7[gd].N = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MAX, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setUpdatedMax", gd7[gd].N);
    gd7[gd].L = function(){
        return this.e(gdA.params.UPDATED_MAX)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getUpdatedMax", gd7[gd].L);
    gd7[gd].O = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MIN, a)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.setUpdatedMin", gd7[gd].O);
    gd7[gd].M = function(){
        return this.e(gdA.params.UPDATED_MIN)
    };
    gdv("google.gdata.contacts.ContactQuery.prototype.getUpdatedMin", gd7[gd].M);
    var gdyh = function(a){
        gdD[gdq](this, "cp", a)
    };
    gdv("google.gdata.contacts.ContactsService", gdyh);
    gdyh.c(gdD);
    gdv("google.gdata.contacts.ContactsService.SERVICE_NAME", "cp");
    gdyh[gd].qh = function(a, b, c){
        return this.H(a, b, c, gdvh)
    };
    gdv("google.gdata.contacts.ContactsService.prototype.getContactFeed", gdyh[gd].qh);
    gdyh[gd].sh = function(a, b, c){
        return this.H(a, b, c, gdxh)
    };
    gdv("google.gdata.contacts.ContactsService.prototype.getContactGroupFeed", gdyh[gd].sh);
    gdyh[gd].ph = function(a, b, c){
        return this.T(a, b, c, gd6)
    };
    gdv("google.gdata.contacts.ContactsService.prototype.getContactEntry", gdyh[gd].ph);
    gdyh[gd].rh = function(a, b, c){
        return this.T(a, b, c, gdwh)
    };
    gdv("google.gdata.contacts.ContactsService.prototype.getContactGroupEntry", gdyh[gd].rh);
    
    gdA.calendar = {};
    gdA.calendar.namespace = {};
    gdA.calendar.namespace.GCAL = "http://schemas.google.com/gCal/2005";
    var gdOg = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.calendar.AccessLevelProperty", gdOg);
    gdOg[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.calendar.AccessLevelProperty.prototype.getValue", gdOg[gd].b);
    gdOg[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.calendar.AccessLevelProperty.prototype.setValue", gdOg[gd].a);
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_EDITOR", "editor");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_FREEBUSY", "freebusy");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_NONE", "none");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_OVERRIDE", "override");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_OWNER", "owner");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_READ", "read");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_RESPOND", "respond");
    gdv("google.gdata.calendar.AccessLevelProperty.VALUE_ROOT", "root");
    var gdPg = function(a){
        gdug[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarAclRole", gdPg);
    gdPg.c(gdug);
    var gdQg = gdA.calendar.namespace.GCAL + "#editor";
    gdv("google.gdata.calendar.CalendarAclRole.VALUE_EDITOR", gdQg);
    var gdRg = gdA.calendar.namespace.GCAL + "#freebusy";
    gdv("google.gdata.calendar.CalendarAclRole.VALUE_FREEBUSY", gdRg);
    var gdSg = gdA.calendar.namespace.GCAL + "#owner";
    gdv("google.gdata.calendar.CalendarAclRole.VALUE_OWNER", gdSg);
    var gdTg = gdA.calendar.namespace.GCAL + "#read";
    gdv("google.gdata.calendar.CalendarAclRole.VALUE_READ", gdTg);
    var gdUg = gdA.calendar.namespace.GCAL + "#root";
    gdv("google.gdata.calendar.CalendarAclRole.VALUE_ROOT", gdUg);
    var gdVg = function(a){
        gdkf[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarExtendedProperty", gdVg);
    gdVg.c(gdkf);
    var gdWg = gdA.calendar.namespace.GCAL + "#calendar";
    gdv("google.gdata.calendar.CalendarExtendedProperty.REALM_CALENDAR", gdWg);
    var gdXg = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.calendar.ColorProperty", gdXg);
    gdXg[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.calendar.ColorProperty.prototype.getValue", gdXg[gd].b);
    gdXg[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.calendar.ColorProperty.prototype.setValue", gdXg[gd].a);
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_0D7813", "#0D7813");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_1B887A", "#1B887A");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_28754E", "#28754E");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_29527A", "#29527A");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_2952A3", "#2952A3");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_4A716C", "#4A716C");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_4E5D6C", "#4E5D6C");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_5229A3", "#5229A3");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_528800", "#528800");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_5A6986", "#5A6986");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_6E6E41", "#6E6E41");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_705770", "#705770");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_7A367A", "#7A367A");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_865A5A", "#865A5A");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_88880E", "#88880E");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_8D6F47", "#8D6F47");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_A32929", "#A32929");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_AB8B00", "#AB8B00");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_B1365F", "#B1365F");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_B1440E", "#B1440E");
    gdv("google.gdata.calendar.ColorProperty.VALUE_RGB_BE6D00", "#BE6D00");
    var gdYg = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.HiddenProperty", gdYg);
    gdYg[gd].b = function(){
        return this[gdm] === gda ? gda : this[gdm] === "true"
    };
    gdv("google.gdata.calendar.HiddenProperty.prototype.getValue", gdYg[gd].b);
    gdYg[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.HiddenProperty.prototype.setValue", gdYg[gd].a);
    var gdZg = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.calendar.IcalUIDProperty", gdZg);
    gdZg[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.calendar.IcalUIDProperty.prototype.getValue", gdZg[gd].b);
    gdZg[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.calendar.IcalUIDProperty.prototype.setValue", gdZg[gd].a);
    var gd_g = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.calendar.OverrideNameProperty", gd_g);
    gd_g[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.calendar.OverrideNameProperty.prototype.getValue", gd_g[gd].b);
    gd_g[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.calendar.OverrideNameProperty.prototype.setValue", gd_g[gd].a);
    var gd0g = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.QuickAddProperty", gd0g);
    gd0g[gd].b = function(){
        return this[gdm] === gda ? gda : this[gdm] === "true"
    };
    gdv("google.gdata.calendar.QuickAddProperty.prototype.getValue", gd0g[gd].b);
    gd0g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.QuickAddProperty.prototype.setValue", gd0g[gd].a);
    var gd1g = function(a){
        if (a) {
            this.id = a.id;
            this.a(a[gdm])
        }
        else {
            this.id = this.id;
            gdg(this, this[gdm])
        }
    };
    gdv("google.gdata.calendar.ResourceProperty", gd1g);
    gd1g[gd].ja = function(){
        return this.id
    };
    gdv("google.gdata.calendar.ResourceProperty.prototype.getId", gd1g[gd].ja);
    gd1g[gd].ca = function(a){
        this.id = a
    };
    gdv("google.gdata.calendar.ResourceProperty.prototype.setId", gd1g[gd].ca);
    gd1g[gd].b = function(){
        return this[gdm] === gda ? gda : this[gdm] === "true"
    };
    gdv("google.gdata.calendar.ResourceProperty.prototype.getValue", gd1g[gd].b);
    gd1g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.ResourceProperty.prototype.setValue", gd1g[gd].a);
    var gd2g = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.SelectedProperty", gd2g);
    gd2g[gd].b = function(){
        return this[gdm] === gda ? gda : this[gdm] === "true"
    };
    gdv("google.gdata.calendar.SelectedProperty.prototype.getValue", gd2g[gd].b);
    gd2g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.SelectedProperty.prototype.setValue", gd2g[gd].a);
    var gd3g = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.SendEventNotificationsProperty", gd3g);
    gd3g[gd].b = function(){
        return this[gdm] === gda ? gda : this[gdm] === "true"
    };
    gdv("google.gdata.calendar.SendEventNotificationsProperty.prototype.getValue", gd3g[gd].b);
    gd3g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.SendEventNotificationsProperty.prototype.setValue", gd3g[gd].a);
    var gd4g = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.SequenceNumberProperty", gd4g);
    gd4g[gd].b = function(){
        return this[gdm] === gda ? gda : gdd(this[gdm])
    };
    gdv("google.gdata.calendar.SequenceNumberProperty.prototype.getValue", gd4g[gd].b);
    gd4g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.SequenceNumberProperty.prototype.setValue", gd4g[gd].a);
    var gd5g = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.SyncEventProperty", gd5g);
    gd5g[gd].b = function(){
        return this[gdm] === gda ? gda : this[gdm] === "true"
    };
    gdv("google.gdata.calendar.SyncEventProperty.prototype.getValue", gd5g[gd].b);
    gd5g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.SyncEventProperty.prototype.setValue", gd5g[gd].a);
    var gd6g = function(a){
        gdg(this, a ? a[gdm] : this[gdm])
    };
    gdv("google.gdata.calendar.TimeZoneProperty", gd6g);
    gd6g[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.calendar.TimeZoneProperty.prototype.getValue", gd6g[gd].b);
    gd6g[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.calendar.TimeZoneProperty.prototype.setValue", gd6g[gd].a);
    var gd7g = function(a){
        if (a) 
            this.a(a[gdm]);
        else 
            gdg(this, this[gdm])
    };
    gdv("google.gdata.calendar.TimesCleanedProperty", gd7g);
    gd7g[gd].b = function(){
        return this[gdm] === gda ? gda : gdd(this[gdm])
    };
    gdv("google.gdata.calendar.TimesCleanedProperty.prototype.getValue", gd7g[gd].b);
    gd7g[gd].a = function(a){
        gdg(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.TimesCleanedProperty.prototype.setValue", gd7g[gd].a);
    var gd8g = function(a){
        if (a) {
            gdta(this, a[gd4a]);
            gdg(this, a[gdm])
        }
        else {
            gdta(this, this[gd4a]);
            gdg(this, this[gdm])
        }
    };
    gdv("google.gdata.calendar.WebContentGadgetPref", gd8g);
    gd8g[gd].$ = function(){
        return this[gd4a]
    };
    gdv("google.gdata.calendar.WebContentGadgetPref.prototype.getName", gd8g[gd].$);
    gd8g[gd].ga = function(a){
        gdta(this, a)
    };
    gdv("google.gdata.calendar.WebContentGadgetPref.prototype.setName", gd8g[gd].ga);
    gd8g[gd].b = function(){
        return this[gdm]
    };
    gdv("google.gdata.calendar.WebContentGadgetPref.prototype.getValue", gd8g[gd].b);
    gd8g[gd].a = function(a){
        gdg(this, a)
    };
    gdv("google.gdata.calendar.WebContentGadgetPref.prototype.setValue", gd8g[gd].a);
    var gd9g = function(a){
        gdU[gdq](this, a);
        if (a) 
            this.kg(a.resource);
        else 
            this.gCal$resource = gdA.util.mutateTo(this.gCal$resource, gd1g);
        var b = ["gd$attendeeType", "gd$entryLink"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.calendar.CalendarWho", gd9g);
    gd9g.c(gdU);
    gd9g[gd].Ni = function(){
        return this.gCal$resource
    };
    gdv("google.gdata.calendar.CalendarWho.prototype.getResource", gd9g[gd].Ni);
    gd9g[gd].kg = function(a){
        if (a && a[gdl] === gde) 
            a = new gd1g(a);
        this.gCal$resource = a
    };
    gdv("google.gdata.calendar.CalendarWho.prototype.setResource", gd9g[gd].kg);
    var gd_ = function(a){
        if (a) {
            this.Cf(a.gadgetPrefs);
            this.Gf(a[gd8a]);
            this.url = a.url;
            this.Eg(a[gdDa])
        }
        else {
            if (this.gCal$webContentGadgetPref) {
                var b = this.gCal$webContentGadgetPref;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gCal$webContentGadgetPref[c] = gdA.util.mutateTo(b[c], gd8g)
            }
            else 
                this.gCal$webContentGadgetPref = [];
            gdva(this, this[gd8a]);
            this.url = this.url;
            gdja(this, this[gdDa])
        }
    };
    gdv("google.gdata.calendar.WebContent", gd_);
    gd_[gd].Kh = function(){
        return this.gCal$webContentGadgetPref
    };
    gdv("google.gdata.calendar.WebContent.prototype.getGadgetPrefs", gd_[gd].Kh);
    gd_[gd].Cf = function(a){
        this.gCal$webContentGadgetPref = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ze(a[b])
    };
    gdv("google.gdata.calendar.WebContent.prototype.setGadgetPrefs", gd_[gd].Cf);
    gd_[gd].ze = function(a){
        if (a[gdl] === gde) 
            a = new gd8g(a);
        this.gCal$webContentGadgetPref[gdi](a)
    };
    gdv("google.gdata.calendar.WebContent.prototype.addGadgetPref", gd_[gd].ze);
    gd_[gd].Nh = function(){
        return this[gd8a] === gda ? gda : gdd(this[gd8a])
    };
    gdv("google.gdata.calendar.WebContent.prototype.getHeight", gd_[gd].Nh);
    gd_[gd].Gf = function(a){
        gdva(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.WebContent.prototype.setHeight", gd_[gd].Gf);
    gd_[gd].lj = function(){
        return this.url
    };
    gdv("google.gdata.calendar.WebContent.prototype.getUrl", gd_[gd].lj);
    gd_[gd].kk = function(a){
        this.url = a
    };
    gdv("google.gdata.calendar.WebContent.prototype.setUrl", gd_[gd].kk);
    gd_[gd].qj = function(){
        return this[gdDa] === gda ? gda : gdd(this[gdDa])
    };
    gdv("google.gdata.calendar.WebContent.prototype.getWidth", gd_[gd].qj);
    gd_[gd].Eg = function(a){
        gdja(this, a === gda ? gda : gdb(a))
    };
    gdv("google.gdata.calendar.WebContent.prototype.setWidth", gd_[gd].Eg);
    gd_[gd].Jh = function(a){
        var b = this.gCal$webContentGadgetPref;
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            if (d.$() == a) 
                return d
        }
        return gda
    };
    gdv("google.gdata.calendar.WebContent.prototype.getGadgetPref", gd_[gd].Jh);
    var gd0 = function(a){
        gdxg[gdq](this, a);
        if (a) 
            this.se(a.webContent);
        else 
            this.gCal$webContent = gdA.util.mutateTo(this.gCal$webContent, gd_);
        var b = ["hreflang", "xml$lang"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.calendar.CalendarLink", gd0);
    gd0.c(gdxg);
    var gd$g = "http://schemas.google.com/gCal/2005/webContent";
    gdv("google.gdata.calendar.CalendarLink.REL_WEB_CONTENT", gd$g);
    gd0[gd].bc = function(){
        return this.gCal$webContent
    };
    gdv("google.gdata.calendar.CalendarLink.prototype.getWebContent", gd0[gd].bc);
    gd0[gd].se = function(a){
        if (a && a[gdl] === gde) 
            a = new gd_(a);
        this.gCal$webContent = a
    };
    gdv("google.gdata.calendar.CalendarLink.prototype.setWebContent", gd0[gd].se);
    var gdah = function(a, b, c, d){
        var e = new gd0;
        e.h(gd$g);
        e.G(d);
        e.D(b);
        e.ka(c);
        e.se(a);
        return e
    };
    gdv("google.gdata.calendar.CalendarLink.create", gdah);
    var gdbh = function(a){
        if (!gdu(this.j)) 
            this.j = gd0;
        if (!gdu(this.Rd)) 
            this.Rd = gdPg;
        gdAg[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarAclEntry", gdbh);
    gdbh.c(gdAg);
    gdbh[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarAclEntry.prototype.xmlns$gCal", gdbh[gd].n);
    var gdch = function(a){
        if (!gdu(this.m)) 
            this.m = gdbh;
        if (!gdu(this.j)) 
            this.j = gd0;
        gdBg[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarAclFeed", gdch);
    gdch.c(gdBg);
    gdch[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarAclFeed.prototype.xmlns$gCal", gdch[gd].n);
    gdch[gd].xh = function(){
        return this.g(gdzg, gdH)
    };
    gdv("google.gdata.calendar.CalendarAclFeed.prototype.getControlledObjectLink", gdch[gd].xh);
    var gddh = function(a){
        if (!gdu(this.j)) 
            this.j = gd0;
        gdL[gdq](this, a);
        var b = ["app$control", "app$edited", "rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.calendar.CalendarCommentEntry", gddh);
    gddh.c(gdL);
    gddh[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarCommentEntry.prototype.xmlns$gCal", gddh[gd].n);
    var gdeh = function(a){
        if (!gdu(this.m)) 
            this.m = gddh;
        if (!gdu(this.j)) 
            this.j = gd0;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights", "subtitle"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.calendar.CalendarCommentFeed", gdeh);
    gdeh.c(gdM);
    gdeh[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarCommentFeed.prototype.xmlns$gCal", gdeh[gd].n);
    var gdfh = function(a){
        if (!gdu(this.cb)) 
            this.cb = gdeh;
        gdN[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarCommentsFeedLink", gdfh);
    gdfh.c(gdN);
    var gd1 = function(a){
        if (!gdu(this.j)) 
            this.j = gd0;
        gdL[gdq](this, a);
        if (a) {
            this.hf(a.accessLevel);
            this.nf(a.color);
            this.Hf(a.hidden);
            this.Eb(a.locations);
            this.Vf(a.overrideName);
            this.og(a.selected);
            this.Sb(a.timeZone);
            this.Tb(a.timesCleaned)
        }
        else {
            this.gCal$accesslevel = gdA.util.mutateTo(this.gCal$accesslevel, gdOg);
            this.gCal$color = gdA.util.mutateTo(this.gCal$color, gdXg);
            this.gCal$hidden = gdA.util.mutateTo(this.gCal$hidden, gdYg);
            if (this.gd$where) {
                var b = this.gd$where;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$where[c] = gdA.util.mutateTo(b[c], gdT)
            }
            else 
                this.gd$where = [];
            this.gCal$overridename = gdA.util.mutateTo(this.gCal$overridename, gd_g);
            this.gCal$selected = gdA.util.mutateTo(this.gCal$selected, gd2g);
            this.gCal$timezone = gdA.util.mutateTo(this.gCal$timezone, gd6g);
            this.gCal$timesCleaned = gdA.util.mutateTo(this.gCal$timesCleaned, gd7g)
        }
        var d = ["app$control", "app$edited", "rights"];
        for (var c = 0; c < d[gdj]; c++) {
            var e = d[c];
            e in this && !gdu(this[e]) && delete this[e]
        }
    };
    gdv("google.gdata.calendar.CalendarEntry", gd1);
    gd1.c(gdL);
    gd1[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarEntry.prototype.xmlns$gCal", gd1[gd].n);
    gd1[gd].d = gdA.namespace.GD;
    gdv("google.gdata.calendar.CalendarEntry.prototype.xmlns$gd", gd1[gd].d);
    gd1[gd].Yg = function(){
        return this.gCal$accesslevel
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getAccessLevel", gd1[gd].Yg);
    gd1[gd].hf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdOg(a);
        this.gCal$accesslevel = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setAccessLevel", gd1[gd].hf);
    gd1[gd].lh = function(){
        return this.gCal$color
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getColor", gd1[gd].lh);
    gd1[gd].nf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdXg(a);
        this.gCal$color = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setColor", gd1[gd].nf);
    gd1[gd].Oh = function(){
        return this.gCal$hidden
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getHidden", gd1[gd].Oh);
    gd1[gd].Hf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdYg(a);
        this.gCal$hidden = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setHidden", gd1[gd].Hf);
    gd1[gd].Oc = function(){
        return this.gd$where
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getLocations", gd1[gd].Oc);
    gd1[gd].Eb = function(a){
        this.gd$where = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.hb(a[b])
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setLocations", gd1[gd].Eb);
    gd1[gd].hb = function(a){
        if (a[gdl] === gde) 
            a = new gdT(a);
        this.gd$where[gdi](a)
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.addLocation", gd1[gd].hb);
    gd1[gd].li = function(){
        return this.gCal$overridename
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getOverrideName", gd1[gd].li);
    gd1[gd].Vf = function(a){
        if (a && a[gdl] === gde) 
            a = new gd_g(a);
        this.gCal$overridename = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setOverrideName", gd1[gd].Vf);
    gd1[gd].Ti = function(){
        return this.gCal$selected
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getSelected", gd1[gd].Ti);
    gd1[gd].og = function(a){
        if (a && a[gdl] === gde) 
            a = new gd2g(a);
        this.gCal$selected = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setSelected", gd1[gd].og);
    gd1[gd].gd = function(){
        return this.gCal$timezone
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getTimeZone", gd1[gd].gd);
    gd1[gd].Sb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd6g(a);
        this.gCal$timezone = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setTimeZone", gd1[gd].Sb);
    gd1[gd].hd = function(){
        return this.gCal$timesCleaned
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getTimesCleaned", gd1[gd].hd);
    gd1[gd].Tb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd7g(a);
        this.gCal$timesCleaned = a
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.setTimesCleaned", gd1[gd].Tb);
    gd1[gd].Xg = function(){
        return this.g(gdyg, gdH)
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getAccessControlListLink", gd1[gd].Xg);
    gd1[gd].Yd = function(){
        return this.g(gdRe, gdH)
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getAtomAlternateLink", gd1[gd].Yd);
    gd1[gd].Ji = function(){
        return this.g("related", gdH)
    };
    gdv("google.gdata.calendar.CalendarEntry.prototype.getRelatedLink", gd1[gd].Ji);
    var gdgh = function(a){
        if (!gdu(this.m)) 
            this.m = gd1;
        if (!gdu(this.j)) 
            this.j = gd0;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights", "subtitle", "openSearch$totalResults"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.calendar.CalendarFeed", gdgh);
    gdgh.c(gdM);
    gdgh[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarFeed.prototype.xmlns$gCal", gdgh[gd].n);
    gdgh[gd].d = gdA.namespace.GD;
    gdv("google.gdata.calendar.CalendarFeed.prototype.xmlns$gd", gdgh[gd].d);
    var gdhh = function(a){
        if (!gdu(this.Od)) 
            this.Od = gdfh;
        gdlg[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarComments", gdhh);
    gdhh.c(gdlg);
    var gdih = function(a){
        if (!gdu(this.Da)) 
            this.Da = gdhh;
        if (!gdu(this.j)) 
            this.j = gd0;
        if (!gdu(this.Sd)) 
            this.Sd = gd9g;
        gdV[gdq](this, a);
        if (a) {
            this.Qb(a.sequence);
            this.Vb(a.uid)
        }
        else {
            this.gCal$sequence = gdA.util.mutateTo(this.gCal$sequence, gd4g);
            this.gCal$uid = gdA.util.mutateTo(this.gCal$uid, gdZg)
        }
    };
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntry", gdih);
    gdih.c(gdV);
    gdih[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntry.prototype.xmlns$gCal", gdih[gd].n);
    gdih[gd].cd = function(){
        return this.gCal$sequence
    };
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntry.prototype.getSequence", gdih[gd].cd);
    gdih[gd].Qb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd4g(a);
        this.gCal$sequence = a
    };
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntry.prototype.setSequence", gdih[gd].Qb);
    gdih[gd].kd = function(){
        return this.gCal$uid
    };
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntry.prototype.getUid", gdih[gd].kd);
    gdih[gd].Vb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdZg(a);
        this.gCal$uid = a
    };
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntry.prototype.setUid", gdih[gd].Vb);
    var gdjh = function(a){
        if (!gdu(this.qc)) 
            this.qc = gdih;
        gdpg[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarRecurrenceExceptionEntryLink", gdjh);
    gdjh.c(gdpg);
    var gdkh = function(a){
        if (!gdu(this.ua)) 
            this.ua = gdjh;
        gdqg[gdq](this, a)
    };
    gdv("google.gdata.calendar.CalendarRecurrenceException", gdkh);
    gdkh.c(gdqg);
    var gd2 = function(a){
        if (!gdu(this.Da)) 
            this.Da = gdhh;
        if (!gdu(this.j)) 
            this.j = gd0;
        if (!gdu(this.Pd)) 
            this.Pd = gd9g;
        if (!gdu(this.Qd)) 
            this.Qd = gdkh;
        gdW[gdq](this, a);
        if (a) {
            this.sa(a.extendedProperties);
            this.fg(a.quickAdd);
            this.pg(a.sendEventNotifications);
            this.Qb(a.sequence);
            this.ug(a.syncEvent);
            this.Vb(a.uid)
        }
        else {
            if (this.gd$extendedProperty) {
                var b = this.gd$extendedProperty;
                for (var c = 0; c < b[gdj]; c++) 
                    this.gd$extendedProperty[c] = gdA.util.mutateTo(b[c], gdVg)
            }
            else 
                this.gd$extendedProperty = [];
            this.gCal$quickadd = gdA.util.mutateTo(this.gCal$quickadd, gd0g);
            this.gCal$sendEventNotifications = gdA.util.mutateTo(this.gCal$sendEventNotifications, gd3g);
            this.gCal$sequence = gdA.util.mutateTo(this.gCal$sequence, gd4g);
            this.gCal$syncEvent = gdA.util.mutateTo(this.gCal$syncEvent, gd5g);
            this.gCal$uid = gdA.util.mutateTo(this.gCal$uid, gdZg)
        }
    };
    gdv("google.gdata.calendar.CalendarEventEntry", gd2);
    gd2.c(gdW);
    gd2[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.xmlns$gCal", gd2[gd].n);
    gd2[gd].Ga = function(){
        return this.gd$extendedProperty
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getExtendedProperties", gd2[gd].Ga);
    gd2[gd].sa = function(a){
        this.gd$extendedProperty = [];
        if (a) 
            for (var b = 0; b < a[gdj]; b++) 
                this.ma(a[b])
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setExtendedProperties", gd2[gd].sa);
    gd2[gd].ma = function(a){
        if (a[gdl] === gde) 
            a = new gdVg(a);
        this.gd$extendedProperty[gdi](a)
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.addExtendedProperty", gd2[gd].ma);
    gd2[gd].Ci = function(){
        return this.gCal$quickadd
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getQuickAdd", gd2[gd].Ci);
    gd2[gd].fg = function(a){
        if (a && a[gdl] === gde) 
            a = new gd0g(a);
        this.gCal$quickadd = a
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setQuickAdd", gd2[gd].fg);
    gd2[gd].Ui = function(){
        return this.gCal$sendEventNotifications
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getSendEventNotifications", gd2[gd].Ui);
    gd2[gd].pg = function(a){
        if (a && a[gdl] === gde) 
            a = new gd3g(a);
        this.gCal$sendEventNotifications = a
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setSendEventNotifications", gd2[gd].pg);
    gd2[gd].cd = function(){
        return this.gCal$sequence
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getSequence", gd2[gd].cd);
    gd2[gd].Qb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd4g(a);
        this.gCal$sequence = a
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setSequence", gd2[gd].Qb);
    gd2[gd].bj = function(){
        return this.gCal$syncEvent
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getSyncEvent", gd2[gd].bj);
    gd2[gd].ug = function(a){
        if (a && a[gdl] === gde) 
            a = new gd5g(a);
        this.gCal$syncEvent = a
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setSyncEvent", gd2[gd].ug);
    gd2[gd].kd = function(){
        return this.gCal$uid
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getUid", gd2[gd].kd);
    gd2[gd].Vb = function(a){
        if (a && a[gdl] === gde) 
            a = new gdZg(a);
        this.gCal$uid = a
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setUid", gd2[gd].Vb);
    gd2[gd].X = function(){
        return this.g(gdRe, gdTe)
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getHtmlLink", gd2[gd].X);
    gd2[gd].Ue = function(){
        return this.g(gd$g)
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getWebContentLink", gd2[gd].Ue);
    gd2[gd].bc = function(){
        var a = this.Ue();
        return a && a.bc()
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.getWebContent", gd2[gd].bc);
    gd2[gd].Fj = function(){
        var a = gdA.util.Te(this.link, gd$g);
        a !== gda && this.link.splice(a, 1)
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.removeWebContent", gd2[gd].Fj);
    gd2[gd].nk = function(a){
        var b = gdA.util.Te(this.link, gd$g);
        if (b !== gda) 
            this.link[b] = a;
        else 
            this.link[gdi](a)
    };
    gdv("google.gdata.calendar.CalendarEventEntry.prototype.setWebContentLink", gd2[gd].nk);
    var gdlh = function(a){
        if (!gdu(this.m)) 
            this.m = gd2;
        if (!gdu(this.j)) 
            this.j = gd0;
        gdrg[gdq](this, a);
        if (a) {
            this.Sb(a.timeZone);
            this.Tb(a.timesCleaned)
        }
        else {
            this.gCal$timezone = gdA.util.mutateTo(this.gCal$timezone, gd6g);
            this.gCal$timesCleaned = gdA.util.mutateTo(this.gCal$timesCleaned, gd7g)
        }
    };
    gdv("google.gdata.calendar.CalendarEventFeed", gdlh);
    gdlh.c(gdrg);
    gdlh[gd].n = gdA.calendar.namespace.GCAL;
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.xmlns$gCal", gdlh[gd].n);
    gdlh[gd].gd = function(){
        return this.gCal$timezone
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.getTimeZone", gdlh[gd].gd);
    gdlh[gd].Sb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd6g(a);
        this.gCal$timezone = a
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.setTimeZone", gdlh[gd].Sb);
    gdlh[gd].hd = function(){
        return this.gCal$timesCleaned
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.getTimesCleaned", gdlh[gd].hd);
    gdlh[gd].Tb = function(a){
        if (a && a[gdl] === gde) 
            a = new gd7g(a);
        this.gCal$timesCleaned = a
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.setTimesCleaned", gdlh[gd].Tb);
    gdlh[gd].Ha = function(){
        return this.g(gdCf, gdH)
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.getFeedBatchLink", gdlh[gd].Ha);
    gdlh[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.getNextLink", gdlh[gd].w);
    gdlh[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.calendar.CalendarEventFeed.prototype.getPreviousLink", gdlh[gd].z);
    gdA.calendar.params = {};
    gdA.calendar.params.EXTQ = "extq";
    gdA.calendar.params.FUTUREEVENTS = "futureevents";
    gdA.calendar.params.ORDERBY = "orderby";
    gdA.calendar.params.RECURRENCE_EXPANSION_END = "recurrence-expansion-end";
    gdA.calendar.params.RECURRENCE_EXPANSION_START = "recurrence-expansion-start";
    gdA.calendar.params.SINGLEEVENTS = "singleevents";
    gdA.calendar.params.SORTORDER = "sortorder";
    gdA.calendar.params.START_MAX = "start-max";
    gdA.calendar.params.START_MIN = "start-min";
    var gd3 = function(a){
        gdE[gdq](this, a);
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.calendar.CalendarCommentQuery", gd3);
    gd3.c(gdE);
    gd3[gd].td = function(a){
        this.f(gdA.params.AUTHOR, a)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.setAuthor", gd3[gd].td);
    gd3[gd].xc = function(){
        return this.e(gdA.params.AUTHOR)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.getAuthor", gd3[gd].xc);
    gd3[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.setMaxResults", gd3[gd].B);
    gd3[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.getMaxResults", gd3[gd].v);
    gd3[gd].vd = function(a){
        this.f(gdA.params.Q, a)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.setFullTextQuery", gd3[gd].vd);
    gd3[gd].Jc = function(){
        return this.e(gdA.params.Q)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.getFullTextQuery", gd3[gd].Jc);
    gd3[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.setStartIndex", gd3[gd].o);
    gd3[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.getStartIndex", gd3[gd].p);
    gd3[gd].N = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MAX, a)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.setUpdatedMax", gd3[gd].N);
    gd3[gd].L = function(){
        return this.e(gdA.params.UPDATED_MAX)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.getUpdatedMax", gd3[gd].L);
    gd3[gd].O = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MIN, a)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.setUpdatedMin", gd3[gd].O);
    gd3[gd].M = function(){
        return this.e(gdA.params.UPDATED_MIN)
    };
    gdv("google.gdata.calendar.CalendarCommentQuery.prototype.getUpdatedMin", gd3[gd].M);
    var gd4 = function(a){
        gdE[gdq](this, a);
        this.S(gdA.calendar.params.FUTUREEVENTS, {
            defaultValue: false
        });
        this.S(gdA.calendar.params.ORDERBY, {
            defaultValue: "lastmodified"
        });
        this.S(gdA.calendar.params.SINGLEEVENTS, {
            defaultValue: false
        });
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.calendar.CalendarEventQuery", gd4);
    gd4.c(gdE);
    gd4[gd].td = function(a){
        this.f(gdA.params.AUTHOR, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setAuthor", gd4[gd].td);
    gd4[gd].xc = function(){
        return this.e(gdA.params.AUTHOR)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getAuthor", gd4[gd].xc);
    gd4[gd].Oj = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.calendar.params.FUTUREEVENTS, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setFutureEvents", gd4[gd].Oj);
    gd4[gd].Ih = function(){
        return this.e(gdA.calendar.params.FUTUREEVENTS)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getFutureEvents", gd4[gd].Ih);
    gd4[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setMaxResults", gd4[gd].B);
    gd4[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getMaxResults", gd4[gd].v);
    gdv("google.gdata.calendar.CalendarEventQuery.ORDERBY_LAST_MODIFIED", "lastmodified");
    gdv("google.gdata.calendar.CalendarEventQuery.ORDERBY_START_TIME", "starttime");
    gd4[gd].Ra = function(a){
        this.f(gdA.calendar.params.ORDERBY, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setOrderBy", gd4[gd].Ra);
    gd4[gd].Ia = function(){
        return this.e(gdA.calendar.params.ORDERBY)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getOrderBy", gd4[gd].Ia);
    gd4[gd].vd = function(a){
        this.f(gdA.params.Q, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setFullTextQuery", gd4[gd].vd);
    gd4[gd].Jc = function(){
        return this.e(gdA.params.Q)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getFullTextQuery", gd4[gd].Jc);
    gd4[gd].ck = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.calendar.params.RECURRENCE_EXPANSION_END, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setRecurrenceExpansionEnd", gd4[gd].ck);
    gd4[gd].Gi = function(){
        return this.e(gdA.calendar.params.RECURRENCE_EXPANSION_END)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getRecurrenceExpansionEnd", gd4[gd].Gi);
    gd4[gd].dk = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.calendar.params.RECURRENCE_EXPANSION_START, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setRecurrenceExpansionStart", gd4[gd].dk);
    gd4[gd].Hi = function(){
        return this.e(gdA.calendar.params.RECURRENCE_EXPANSION_START)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getRecurrenceExpansionStart", gd4[gd].Hi);
    gd4[gd].gk = function(a){
        if (typeof a == "string") 
            a = a === "true";
        this.f(gdA.calendar.params.SINGLEEVENTS, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setSingleEvents", gd4[gd].gk);
    gd4[gd].Wi = function(){
        return this.e(gdA.calendar.params.SINGLEEVENTS)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getSingleEvents", gd4[gd].Wi);
    gdv("google.gdata.calendar.CalendarEventQuery.SORTORDER_ASCENDING", "ascending");
    gdv("google.gdata.calendar.CalendarEventQuery.SORTORDER_DESCENDING", "descending");
    gd4[gd].xd = function(a){
        this.f(gdA.calendar.params.SORTORDER, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setSortOrder", gd4[gd].xd);
    gd4[gd].ed = function(){
        return this.e(gdA.calendar.params.SORTORDER)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getSortOrder", gd4[gd].ed);
    gd4[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setStartIndex", gd4[gd].o);
    gd4[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getStartIndex", gd4[gd].p);
    gd4[gd].Vj = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.calendar.params.START_MAX, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setMaximumStartTime", gd4[gd].Vj);
    gd4[gd].$h = function(){
        return this.e(gdA.calendar.params.START_MAX)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getMaximumStartTime", gd4[gd].$h);
    gd4[gd].Xj = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.calendar.params.START_MIN, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setMinimumStartTime", gd4[gd].Xj);
    gd4[gd].ci = function(){
        return this.e(gdA.calendar.params.START_MIN)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getMinimumStartTime", gd4[gd].ci);
    gd4[gd].N = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MAX, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setUpdatedMax", gd4[gd].N);
    gd4[gd].L = function(){
        return this.e(gdA.params.UPDATED_MAX)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getUpdatedMax", gd4[gd].L);
    gd4[gd].O = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MIN, a)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.setUpdatedMin", gd4[gd].O);
    gd4[gd].M = function(){
        return this.e(gdA.params.UPDATED_MIN)
    };
    gdv("google.gdata.calendar.CalendarEventQuery.prototype.getUpdatedMin", gd4[gd].M);
    var gd5 = function(a){
        gdD[gdq](this, "cl", a)
    };
    gdv("google.gdata.calendar.CalendarService", gd5);
    gd5.c(gdD);
    gdv("google.gdata.calendar.CalendarService.SERVICE_NAME", "cl");
    gd5[gd].Zg = function(a, b, c){
        return this.H(a, b, c, gdch)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getAclFeed", gd5[gd].Zg);
    gd5[gd].$g = function(a, b, c){
        return this.H(a, b, c, gdgh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getAllCalendarsFeed", gd5[gd].$g);
    gd5[gd].kh = function(a, b, c){
        return this.H(a, b, c, gdgh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getCalendarsFeed", gd5[gd].kh);
    gd5[gd].mh = function(a, b, c){
        return this.H(a, b, c, gdeh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getCommentsFeed", gd5[gd].mh);
    gd5[gd].Fh = function(a, b, c){
        return this.H(a, b, c, gdlh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getEventsFeed", gd5[gd].Fh);
    gd5[gd].mi = function(a, b, c){
        return this.H(a, b, c, gdgh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getOwnCalendarsFeed", gd5[gd].mi);
    gd5[gd].$d = function(a, b, c){
        return this.T(a, b, c, gdbh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getCalendarAclEntry", gd5[gd].$d);
    gd5[gd].ae = function(a, b, c){
        return this.T(a, b, c, gddh)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getCalendarCommentEntry", gd5[gd].ae);
    gd5[gd].jb = function(a, b, c){
        return this.T(a, b, c, gd1)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getCalendarEntry", gd5[gd].jb);
    gd5[gd].be = function(a, b, c){
        return this.T(a, b, c, gd2)
    };
    gdv("google.gdata.calendar.CalendarService.prototype.getCalendarEventEntry", gd5[gd].be);
    gdv("google.gdata.calendar.CalendarService.prototype.getAclEntry", gd5[gd].$d);
    gdv("google.gdata.calendar.CalendarService.prototype.getAllCalendarsEntry", gd5[gd].jb);
    gdv("google.gdata.calendar.CalendarService.prototype.getCalendarsEntry", gd5[gd].jb);
    gdv("google.gdata.calendar.CalendarService.prototype.getCommentsEntry", gd5[gd].ae);
    gdv("google.gdata.calendar.CalendarService.prototype.getEventsEntry", gd5[gd].be);
    gdv("google.gdata.calendar.CalendarService.prototype.getOwnCalendarsEntry", gd5[gd].jb);
    gdv("google.gdata.calendar.CalendarService.prototype.getAlternateLink", gd5[gd].Yd);
    gdbh[gd].l = function(){
        return gd0
    };
    gdbh[gd].Xd = function(){
        return gdPg
    };
    gdch[gd].t = function(){
        return gdbh
    };
    gdch[gd].l = function(){
        return gd0
    };
    gddh[gd].l = function(){
        return gd0
    };
    gdeh[gd].t = function(){
        return gddh
    };
    gdeh[gd].l = function(){
        return gd0
    };
    gdhh[gd].de = function(){
        return gdfh
    };
    gd1[gd].l = function(){
        return gd0
    };
    gd2[gd].kb = function(){
        return gdhh
    };
    gd2[gd].l = function(){
        return gd0
    };
    gd2[gd].nb = function(){
        return gd9g
    };
    gd2[gd].ge = function(){
        return gdkh
    };
    gdlh[gd].t = function(){
        return gd2
    };
    gdlh[gd].l = function(){
        return gd0
    };
    gdgh[gd].t = function(){
        return gd1
    };
    gdgh[gd].l = function(){
        return gd0
    };
    
    gdA.blogger = {};
    var gdDg = function(a){
        gdBf[gdq](this, a);
        var b = ["hreflang", "xml$lang"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.BloggerLink", gdDg);
    gdDg.c(gdBf);
    var gdEg = "replies";
    gdv("google.gdata.blogger.BloggerLink.REL_REPLIES", gdEg);
    gdv("google.gdata.blogger.BloggerLink.REL_SETTINGS", "http://schemas.google.com/blogger/2008#settings");
    gdv("google.gdata.blogger.BloggerLink.REL_TEMPLATE", "http://schemas.google.com/blogger/2008#template");
    var gdFg = function(a){
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdL[gdq](this, a);
        var b = ["content", "app$control", "rights"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.BlogEntry", gdFg);
    gdFg.c(gdL);
    gdFg[gd].za = function(){
        return this.g(gdmf, gdH)
    };
    gdv("google.gdata.blogger.BlogEntry.prototype.getEntryPostLink", gdFg[gd].za);
    gdFg[gd].I = function(){
        return this.g(gdnf, gdH)
    };
    gdv("google.gdata.blogger.BlogEntry.prototype.getFeedLink", gdFg[gd].I);
    gdFg[gd].X = function(){
        return this.g(gdRe, gdTe)
    };
    gdv("google.gdata.blogger.BlogEntry.prototype.getHtmlLink", gdFg[gd].X);
    gdFg[gd].La = function(){
        return this.g(gdEg, gdH)
    };
    gdv("google.gdata.blogger.BlogEntry.prototype.getRepliesLink", gdFg[gd].La);
    var gdGg = function(a){
        if (!gdu(this.m)) 
            this.m = gdFg;
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.BlogFeed", gdGg);
    gdGg.c(gdM);
    gdGg[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.blogger.BlogFeed.prototype.getNextLink", gdGg[gd].w);
    gdGg[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.blogger.BlogFeed.prototype.getPreviousLink", gdGg[gd].z);
    var gdHg = function(a){
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdL[gdq](this, a);
        if (a) 
            this.Jf(a.inReplyTo);
        else 
            this["thr$in-reply-to"] = gdA.util.mutateTo(this["thr$in-reply-to"], gdCg);
        var b = ["app$control", "rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.CommentEntry", gdHg);
    gdHg.c(gdL);
    gdHg[gd].Xa = gdA.threading.namespace.THR;
    gdv("google.gdata.blogger.CommentEntry.prototype.xmlns$thr", gdHg[gd].Xa);
    gdHg[gd].Rh = function(){
        return this["thr$in-reply-to"]
    };
    gdv("google.gdata.blogger.CommentEntry.prototype.getInReplyTo", gdHg[gd].Rh);
    gdHg[gd].Jf = function(a){
        if (a && a[gdl] === gde) 
            a = new gdCg(a);
        this["thr$in-reply-to"] = a
    };
    gdv("google.gdata.blogger.CommentEntry.prototype.setInReplyTo", gdHg[gd].Jf);
    gdHg[gd].X = function(){
        return this.g(gdRe, gdTe)
    };
    gdv("google.gdata.blogger.CommentEntry.prototype.getHtmlLink", gdHg[gd].X);
    gdHg[gd].La = function(){
        return this.g(gdEg, gdH)
    };
    gdv("google.gdata.blogger.CommentEntry.prototype.getRepliesLink", gdHg[gd].La);
    var gdIg = function(a){
        if (!gdu(this.m)) 
            this.m = gdHg;
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.PostCommentFeed", gdIg);
    gdIg.c(gdM);
    gdIg[gd].Xa = gdA.threading.namespace.THR;
    gdv("google.gdata.blogger.PostCommentFeed.prototype.xmlns$thr", gdIg[gd].Xa);
    gdIg[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.blogger.PostCommentFeed.prototype.getNextLink", gdIg[gd].w);
    gdIg[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.blogger.PostCommentFeed.prototype.getPreviousLink", gdIg[gd].z);
    var gdJg = function(a){
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdL[gdq](this, a);
        var b = ["rights", "summary"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.PostEntry", gdJg);
    gdJg.c(gdL);
    gdJg[gd].za = function(){
        return this.g(gdmf, gdH)
    };
    gdv("google.gdata.blogger.PostEntry.prototype.getEntryPostLink", gdJg[gd].za);
    gdJg[gd].I = function(){
        return this.g(gdnf, gdH)
    };
    gdv("google.gdata.blogger.PostEntry.prototype.getFeedLink", gdJg[gd].I);
    gdJg[gd].X = function(){
        return this.g(gdRe, gdTe)
    };
    gdv("google.gdata.blogger.PostEntry.prototype.getHtmlLink", gdJg[gd].X);
    gdJg[gd].Mi = function(){
        return this.g(gdEg, gdTe)
    };
    gdv("google.gdata.blogger.PostEntry.prototype.getRepliesHtmlLink", gdJg[gd].Mi);
    gdJg[gd].La = function(){
        return this.g(gdEg, gdH)
    };
    gdv("google.gdata.blogger.PostEntry.prototype.getRepliesLink", gdJg[gd].La);
    var gdKg = function(a){
        if (!gdu(this.m)) 
            this.m = gdHg;
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.BlogCommentFeed", gdKg);
    gdKg.c(gdM);
    gdKg[gd].Xa = gdA.threading.namespace.THR;
    gdv("google.gdata.blogger.BlogCommentFeed.prototype.xmlns$thr", gdKg[gd].Xa);
    gdKg[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.blogger.BlogCommentFeed.prototype.getNextLink", gdKg[gd].w);
    gdKg[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.blogger.BlogCommentFeed.prototype.getPreviousLink", gdKg[gd].z);
    var gdLg = function(a){
        if (!gdu(this.m)) 
            this.m = gdJg;
        if (!gdu(this.j)) 
            this.j = gdDg;
        gdM[gdq](this, a);
        var b = ["xml$base", "logo", "rights"];
        for (var c = 0; c < b[gdj]; c++) {
            var d = b[c];
            d in this && !gdu(this[d]) && delete this[d]
        }
    };
    gdv("google.gdata.blogger.BlogPostFeed", gdLg);
    gdLg.c(gdM);
    gdLg[gd].w = function(){
        return this.g("next", gdH)
    };
    gdv("google.gdata.blogger.BlogPostFeed.prototype.getNextLink", gdLg[gd].w);
    gdLg[gd].z = function(){
        return this.g(gdSe, gdH)
    };
    gdv("google.gdata.blogger.BlogPostFeed.prototype.getPreviousLink", gdLg[gd].z);
    gdA.blogger.params = {};
    gdA.blogger.params.ORDERBY = "orderby";
    var gdX = function(a){
        gdE[gdq](this, a);
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.blogger.BlogCommentQuery", gdX);
    gdX.c(gdE);
    gdX[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.setMaxResults", gdX[gd].B);
    gdX[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.getMaxResults", gdX[gd].v);
    gdX[gd].Sa = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.PUBLISHED_MAX, a)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.setPublishedMax", gdX[gd].Sa);
    gdX[gd].Ja = function(){
        return this.e(gdA.params.PUBLISHED_MAX)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.getPublishedMax", gdX[gd].Ja);
    gdX[gd].Ta = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.PUBLISHED_MIN, a)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.setPublishedMin", gdX[gd].Ta);
    gdX[gd].Ka = function(){
        return this.e(gdA.params.PUBLISHED_MIN)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.getPublishedMin", gdX[gd].Ka);
    gdX[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.setStartIndex", gdX[gd].o);
    gdX[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.getStartIndex", gdX[gd].p);
    gdX[gd].N = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MAX, a)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.setUpdatedMax", gdX[gd].N);
    gdX[gd].L = function(){
        return this.e(gdA.params.UPDATED_MAX)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.getUpdatedMax", gdX[gd].L);
    gdX[gd].O = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MIN, a)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.setUpdatedMin", gdX[gd].O);
    gdX[gd].M = function(){
        return this.e(gdA.params.UPDATED_MIN)
    };
    gdv("google.gdata.blogger.BlogCommentQuery.prototype.getUpdatedMin", gdX[gd].M);
    var gdY = function(a){
        gdE[gdq](this, a);
        this.S(gdA.blogger.params.ORDERBY, {
            defaultValue: "published"
        });
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.blogger.BlogPostQuery", gdY);
    gdY.c(gdE);
    gdY[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setMaxResults", gdY[gd].B);
    gdY[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getMaxResults", gdY[gd].v);
    gdv("google.gdata.blogger.BlogPostQuery.ORDERBY_EDITED", "edited");
    gdv("google.gdata.blogger.BlogPostQuery.ORDERBY_PUBLISHED", "published");
    gdv("google.gdata.blogger.BlogPostQuery.ORDERBY_UPDATED", "updated");
    gdY[gd].Ra = function(a){
        this.f(gdA.blogger.params.ORDERBY, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setOrderBy", gdY[gd].Ra);
    gdY[gd].Ia = function(){
        return this.e(gdA.blogger.params.ORDERBY)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getOrderBy", gdY[gd].Ia);
    gdY[gd].Sa = function(a){
        if (typeof a ==
        "string") 
            a = gdB(a);
        this.f(gdA.params.PUBLISHED_MAX, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setPublishedMax", gdY[gd].Sa);
    gdY[gd].Ja = function(){
        return this.e(gdA.params.PUBLISHED_MAX)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getPublishedMax", gdY[gd].Ja);
    gdY[gd].Ta = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.PUBLISHED_MIN, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setPublishedMin", gdY[gd].Ta);
    gdY[gd].Ka = function(){
        return this.e(gdA.params.PUBLISHED_MIN)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getPublishedMin", gdY[gd].Ka);
    gdY[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setStartIndex", gdY[gd].o);
    gdY[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getStartIndex", gdY[gd].p);
    gdY[gd].N = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MAX, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setUpdatedMax", gdY[gd].N);
    gdY[gd].L = function(){
        return this.e(gdA.params.UPDATED_MAX)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getUpdatedMax", gdY[gd].L);
    gdY[gd].O = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MIN, a)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.setUpdatedMin", gdY[gd].O);
    gdY[gd].M = function(){
        return this.e(gdA.params.UPDATED_MIN)
    };
    gdv("google.gdata.blogger.BlogPostQuery.prototype.getUpdatedMin", gdY[gd].M);
    var gdMg = function(a){
        gdE[gdq](this, a);
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.blogger.BlogQuery", gdMg);
    gdMg.c(gdE);
    gdMg[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.blogger.BlogQuery.prototype.setMaxResults", gdMg[gd].B);
    gdMg[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.blogger.BlogQuery.prototype.getMaxResults", gdMg[gd].v);
    gdMg[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.blogger.BlogQuery.prototype.setStartIndex", gdMg[gd].o);
    gdMg[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.blogger.BlogQuery.prototype.getStartIndex", gdMg[gd].p);
    var gdZ = function(a){
        gdE[gdq](this, a);
        this.S(gdA.params.START_INDEX, {
            defaultValue: 1
        })
    };
    gdv("google.gdata.blogger.PostCommentQuery", gdZ);
    gdZ.c(gdE);
    gdZ[gd].B = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.MAX_RESULTS, a)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.setMaxResults", gdZ[gd].B);
    gdZ[gd].v = function(){
        return this.e(gdA.params.MAX_RESULTS)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.getMaxResults", gdZ[gd].v);
    gdZ[gd].Sa = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.PUBLISHED_MAX, a)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.setPublishedMax", gdZ[gd].Sa);
    gdZ[gd].Ja = function(){
        return this.e(gdA.params.PUBLISHED_MAX)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.getPublishedMax", gdZ[gd].Ja);
    gdZ[gd].Ta = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.PUBLISHED_MIN, a)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.setPublishedMin", gdZ[gd].Ta);
    gdZ[gd].Ka = function(){
        return this.e(gdA.params.PUBLISHED_MIN)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.getPublishedMin", gdZ[gd].Ka);
    gdZ[gd].o = function(a){
        if (typeof a == "string") 
            a = gdd(a);
        this.f(gdA.params.START_INDEX, a)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.setStartIndex", gdZ[gd].o);
    gdZ[gd].p = function(){
        return this.e(gdA.params.START_INDEX)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.getStartIndex", gdZ[gd].p);
    gdZ[gd].N = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MAX, a)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.setUpdatedMax", gdZ[gd].N);
    gdZ[gd].L = function(){
        return this.e(gdA.params.UPDATED_MAX)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.getUpdatedMax", gdZ[gd].L);
    gdZ[gd].O = function(a){
        if (typeof a == "string") 
            a = gdB(a);
        this.f(gdA.params.UPDATED_MIN, a)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.setUpdatedMin", gdZ[gd].O);
    gdZ[gd].M = function(){
        return this.e(gdA.params.UPDATED_MIN)
    };
    gdv("google.gdata.blogger.PostCommentQuery.prototype.getUpdatedMin", gdZ[gd].M);
    var gdNg = function(a){
        gdD[gdq](this, "blogger", a)
    };
    gdv("google.gdata.blogger.BloggerService", gdNg);
    gdNg.c(gdD);
    gdv("google.gdata.blogger.BloggerService.SERVICE_NAME", "blogger");
    gdNg[gd].ih = function(a, b, c){
        return this.H(a, b, c, gdGg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getBlogFeed", gdNg[gd].ih);
    gdNg[gd].gh = function(a, b, c){
        return this.H(a, b, c, gdKg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getBlogCommentFeed", gdNg[gd].gh);
    gdNg[gd].jh = function(a, b, c){
        return this.H(a, b, c, gdLg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getBlogPostFeed", gdNg[gd].jh);
    gdNg[gd].wi = function(a, b, c){
        return this.H(a, b, c, gdIg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getPostCommentFeed", gdNg[gd].wi);
    gdNg[gd].hh = function(a, b, c){
        return this.T(a, b, c, gdFg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getBlogEntry", gdNg[gd].hh);
    gdNg[gd].Bc = function(a, b, c){
        return this.T(a, b, c, gdHg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getCommentEntry", gdNg[gd].Bc);
    gdNg[gd].fe = function(a, b, c){
        return this.T(a, b, c, gdJg)
    };
    gdv("google.gdata.blogger.BloggerService.prototype.getPostEntry", gdNg[gd].fe);
    gdv("google.gdata.blogger.BlogCommentEntry", gdHg);
    gdv("google.gdata.blogger.PostCommentEntry", gdHg);
    gdv("google.gdata.blogger.BlogPostEntry", gdJg);
    gdv("google.gdata.blogger.BloggerService.prototype.getBlogCommentEntry", gdNg[gd].Bc);
    gdv("google.gdata.blogger.BloggerService.prototype.getPostCommentEntry", gdNg[gd].Bc);
    gdv("google.gdata.blogger.BloggerService.prototype.getBlogPostEntry", gdNg[gd].fe);
    gdKg[gd].t = function(){
        return gdHg
    };
    gdKg[gd].l = function(){
        return gdDg
    };
    gdFg[gd].l = function(){
        return gdDg
    };
    gdGg[gd].t = function(){
        return gdFg
    };
    gdGg[gd].l = function(){
        return gdDg
    };
    gdJg[gd].l = function(){
        return gdDg
    };
    gdLg[gd].t = function(){
        return gdJg
    };
    gdLg[gd].l = function(){
        return gdDg
    };
    gdHg[gd].l = function(){
        return gdDg
    };
    gdIg[gd].t = function(){
        return gdHg
    };
    gdIg[gd].l = function(){
        return gdDg
    };
    
    
    google.loader.loaded({
        "module": "gdata",
        "version": "1.5",
        "components": ["blogger", "default", "finance", "core", "calendar", "contacts"]
    });
    google.loader.eval.gdata = function(){
        eval(arguments[0])
    }
})()
