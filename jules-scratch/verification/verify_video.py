from playwright.sync_api import Page, expect

def test_video_embed(page: Page):
    """
    This test verifies that the video is embedded correctly.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://127.0.0.1:8080")

    # Wait for the page to be fully loaded
    page.wait_for_load_state("networkidle")

    # 2. Assert: Confirm the video iframe is present.
    video_iframe = page.frame_locator('iframe[src*="google.com"]')
    expect(video_iframe).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")