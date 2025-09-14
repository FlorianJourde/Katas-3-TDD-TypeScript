<?php

namespace App;
function isDivisibleBy(int $divider): callable
{
    return fn(int $number): bool => $number % $divider === 0;
}

function et(callable $predicate1, callable $predicate2): callable
{
    return fn(int $number): bool => $predicate1($number) && $predicate2($number);
}

class FizzBuzz
{
    public function proceed(int $number): string
    {
        $isDivisibleByThree = isDivisibleBy(3);
        $isDivisibleByFive = isDivisibleBy(5);
        $containsThree = str_contains((string)$number, "3");
        $containsFive = str_contains((string)$number, "5");

        return match (true) {
            et($isDivisibleByThree, $isDivisibleByFive)($number) => 'fizzbuzz',
            $isDivisibleByThree($number) || $containsThree => 'fizz',
            $isDivisibleByFive($number) || $containsFive => 'buzz',
            default => (string)$number,
        };
    }
}
