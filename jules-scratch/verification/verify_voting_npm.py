from playwright.sync_api import sync_playwright, Page, expect
import re

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://127.0.0.1:8081/")

    # Locate the "Top Youth Priorities" section
    priorities_section = page.locator("#next-gen >> div.mb-20").first

    # Find the "Urban Futures" priority card and click it
    urban_futures_card = priorities_section.locator("div.rounded-lg", has_text="Urban Futures")
    urban_futures_card.click()

    # Click the vote button
    vote_button = priorities_section.get_by_role("button", name="Vote for Your Top Priorities")
    vote_button.click()

    # Wait for the vote count to update
    expect(urban_futures_card.get_by_text("1 vote")).to_be_visible()

    # Take a screenshot
    priorities_section.screenshot(path="jules-scratch/verification/voting_verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
