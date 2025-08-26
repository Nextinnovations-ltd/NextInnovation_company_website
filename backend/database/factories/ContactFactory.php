<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => '0924535468',
            'interest' => $this->faker->numberBetween(1, 4),
            'country' => 'japan',
            'budget' => $this->faker->numberBetween(1200,2000),
            'message' => 'Please,contact me!'
        ];
    }
}
