<?php

    /**
    *   @name check_palindrome
    *   @desc check if the given string is palindrome
    *   @param {string} $query input string
    *   @return {boolean}
    */
    function check_palindrome($query) {
        $query = explode(" ", $query);
        $query = strtolower(implode("", $query));
        $is_palindrome = ($query === strrev($query)) ? 1 : 0;
        return  $is_palindrome;
    }


    // echo the returned value
    echo check_palindrome($_GET['q']);
?>