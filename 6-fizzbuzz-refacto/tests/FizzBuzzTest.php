<?php

namespace App\Tests;

use PHPUnit\Framework\Attributes\Before;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use App\FizzBuzz;

class FizzBuzzTest extends TestCase
{
    private FizzBuzz $fizzBuzz;

    #[Before]
    public function setUp(): void
    {
        $this->fizzBuzz = new FizzBuzz();
    }

    #[Test]
    public function one_returns_one(): void
    {
        self::assertSame('1', $this->fizzBuzz->proceed(1));
    }

    #[Test]
    public function two_returns_two(): void
    {
        self::assertSame('2', $this->fizzBuzz->proceed(2));
    }

    #[Test]
    public function three_returns_fizz(): void
    {
        self::assertSame('fizz', $this->fizzBuzz->proceed(3));
    }

    #[Test]
    public function four_returns_four(): void
    {
        self::assertSame('4', $this->fizzBuzz->proceed(4));
    }

    #[Test]
    public function five_returns_buzz(): void
    {
        self::assertSame('buzz', $this->fizzBuzz->proceed(5));
    }

    #[Test]
    public function six_returns_fizz(): void
    {
        self::assertSame('fizz', $this->fizzBuzz->proceed(6));
    }

    #[Test]
    public function ten_returns_buzz(): void
    {
        self::assertSame('buzz', $this->fizzBuzz->proceed(10));
    }

    #[Test]
    public function fifteen_returns_buzz(): void
    {
        self::assertSame('fizzbuzz', $this->fizzBuzz->proceed(15));
    }

    #[Test]
    public function thirty_returns_fizzbuzz(): void
    {
        self::assertSame('fizzbuzz', $this->fizzBuzz->proceed(30));
    }

    #[DataProvider('numbers_provider')]
    #[Test]
    public function test_many_numbers(int $number, string $expected): void
    {
        self::assertSame($expected, $this->fizzBuzz->proceed($number));
    }

    public static function numbers_provider()
    {
        return [
            'twenty_one_returns_buzz' => [21, 'fizz'],
            'fourty_returns_buzz' => [40, 'buzz'],
            'sixty_returns_buzz' => [60, 'fizzbuzz'],
            'thirteen_returns_fizz' => [13, 'fizz'],
            'fifty_one_returns_fizz' => [51, 'fizz'],
            'fifty_two_returns_buzz' => [52, 'buzz'],
            'twenty_three_returns_fizz' => [23, 'fizz'],
            'seventeen_returns_thirteen' => [17, '17'],
        ];
    }
}