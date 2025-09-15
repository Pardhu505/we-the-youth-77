from playwright.sync_api import Page, expect

def test_video_section(page: Page):
    """
    This test verifies that the video section is displayed correctly.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://127.0.0.1:8080")

    # 2. Act: Find the Hero Section
    hero_section = page.locator("section").first
    hero_section.scroll_into_view_if_needed()

    # 3. Assert: Confirm the video section is visible.
    video_section = hero_section.locator("div.relative.mx-auto.mb-2.max-w-4xl")
    expect(video_section).to_be_visible()
    page.wait_for_load_state('networkidle')


    # 4. Screenshot: Capture the final result for visual verification.
    video_section.screenshot(path="jules-scratch/verification/verification.png")
