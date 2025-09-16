from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))

    page.goto("http://127.0.0.1:8080")

    # Scroll to the Next-Gen Leaders section
    next_gen_section = page.locator("#next-gen")
    next_gen_section.scroll_into_view_if_needed()

    # Wait for the images to load
    page.wait_for_load_state("networkidle")

    # Take a screenshot of the initial state
    next_gen_section.screenshot(path="jules-scratch/verification/voting_initial_state.png")

    # Click on the first leader to select them
    first_leader = page.locator(".grid.md\\:grid-cols-2.lg\\:grid-cols-3 .rounded-lg").first
    first_leader.click()

    # Take a screenshot after selecting the leader
    next_gen_section.screenshot(path="jules-scratch/verification/voting_leader_selected.png")

    # Wait for the button to be enabled
    vote_button = page.locator("button:has-text('Vote for Leaders')")
    expect(vote_button).to_be_enabled()

    # Click the "Vote for Leaders" button
    vote_button.click()

    # Wait for the vote to be processed and the UI to update
    page.wait_for_load_state("networkidle")

    # Take a screenshot of the updated state
    next_gen_section.screenshot(path="jules-scratch/verification/voting_updated_state.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
