<?php

namespace App;

class FizzBuzz
{
    public function proceed(int $number): string
    {
        $isDivisibleByThree = 0 === $number % 3;
        $isDivisibleByFive = 0 === $number % 5;

        if ($isDivisibleByThree && $isDivisibleByFive) return 'fizzbuzz';
        if ($isDivisibleByThree) return 'fizz';
        if ($isDivisibleByFive) return 'buzz';

        return (string)$number;
    }
}