import { test, expect } from '@playwright/test';

test('User can search for hotels on booking.com for New Delhi with specific dates', async ({ page }) => {
    // Step 1: Navigate to booking.com homepage
    await page.goto('https://www.booking.com/');

    // Step 2: Close sign-in popup
    await page.getByRole('button', { name: 'Dismiss sign-in info.' }).click();

    // Step 3: Enter destination
    const destinationCombobox = page.getByRole('combobox', { name: 'Where are you going?' });
    await destinationCombobox.fill('new delhi');
    await page.getByRole('option', { name: /New Delhi/ }).click();
    await expect(destinationCombobox).toHaveValue('New Delhi, India');

    // Step 4: Select check-in date (30 January 2026)
    await page.getByRole('button', { name: /30 Jan/ }).click();
    
    // Step 5: Select check-out date (31 January 2026)
    await page.getByRole('button', { name: /31 Jan/ }).click();

    // Step 6: Perform search
    const searchButton = page.getByRole('button', { name: 'Search' });
    await searchButton.click();

    // Step 7: Verify search results page loaded
    await expect(page).toHaveURL(/search/);
});

