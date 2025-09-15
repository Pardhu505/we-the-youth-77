from playwright.sync_api import Page, expect, sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the home page
    page.goto("http://127.0.0.1:8084/")

    # Wait for the iframe to be visible
    iframe = page.locator("iframe#iframe-preview")
    expect(iframe).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
