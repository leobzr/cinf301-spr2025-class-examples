/*
 * Immediately invokable function
 */
(function () {
    /*
     * Check out this object in console, has LOTS of properties
     * See: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
     * on prototype chains to understand better.
     * Try:
     *     Object.getPrototypeOf(obj);
     *     Object.getOwnPropertyNames(obj);
     *     Object.getOwnPropertyDescriptors(obj);
     */

    var obj = {
        course: "CINF301",
        loveit: {
            num_students: 14,
            love_it: 14
        }
    };
    obj.title = "Web Application Development";
    document.getElementById("immediate").innerHTML = "Goodbye Doggie";
    //document.getElementById("immediate").innerHTML = obj.loveit.love_it.toString(2);

    // Call myfunc() here or in HTML using event.
    //myfunc();
})();

/*
 * Function only run when explicitly called (e.g. in index.html file)
 */
function myfunc() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = i + ' zee';
    }
    console.log(arr);
    document.getElementById("array").innerHTML = arr.toString();

    /*
     * Count number of chars in body, from
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
     *
     * Note: nodeType (which is read-only) on a node yields:
     *  1 if node is an element node
     *  2 if node is an attribute node
     *  3 if node is a text node
     *  8 if node is a comment node
     *
     */
    let charsInBody = (function counter(elm) {
        //console.log(elm);
        if (elm.nodeType == 3) { // TEXT_NODE
            return elm.nodeValue.length;
        }
        let count = 0;
        for (let i = 0, child; child = elm.childNodes[i]; i++) {
            count += counter(child);
        }
        return count;
    })(document.body);

    document.getElementById("chars").innerHTML = charsInBody.toString();
}
