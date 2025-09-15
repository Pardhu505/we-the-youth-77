from playwright.sync_api import Page, expect, sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the home page
    page.goto("http://127.0.0.1:8085/")

    # Wait for the hero section to be visible
    hero_section = page.locator("#home")
    expect(hero_section).to_be_visible()

    # Wait for the background image to be loaded
    expect(hero_section).to_have_css("background-image", 'url("http://127.0.0.1:8085/hero-background.jpg")')

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
