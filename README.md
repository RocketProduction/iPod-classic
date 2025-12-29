# iPod Classic Web Player

A faithful recreation of the classic iPod interface as a Progressive Web App (PWA). Play your local music files with the nostalgic click wheel experience, right in your browser.

![iPod Classic](https://img.shields.io/badge/iPod-Classic-white?style=for-the-badge&logo=apple&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🎵 Features

### Music Playback
- **Local file support** - Load MP3, M4A, FLAC, WAV, OGG files from your device
- **Folder import** - Import entire music folders at once
- **Gapless playback** - Seamless transitions between tracks
- **Crossfade** - Smooth audio crossfading (0-12 seconds)
- **Shuffle & Repeat** - All playback modes supported

### Navigation
- **Click Wheel** - Touch-enabled circular navigation, just like the original
- **Cover Flow** - Beautiful album art browsing with 3D effect
- **Browse by** - Artists, Albums, Songs, Playlists
- **Queue management** - Add songs to play next

### Audio
- **10-Band Equalizer** - Parametric EQ with preset and custom profiles
- **Real-time preview** - Hear EQ changes instantly
- **Volume control** - Smooth volume adjustment via click wheel

### Lyrics
- **Synced lyrics** - Karaoke-style scrolling lyrics (via LRCLIB)
- **Plain lyrics** - Fallback to static lyrics display
- **Multiple sources** - LRCLIB, ChartLyrics, lyrics.ovh

### PWA Features
- **Install as app** - Add to home screen on any device
- **Offline support** - Works without internet after installation
- **Media controls** - Lock screen and notification controls on mobile
- **Background playback** - Keep listening while using other apps

### Customization
- **Themes** - Classic white or black iPod appearance
- **Click sounds** - Optional authentic click feedback
- **Haptic feedback** - Vibration on supported devices

## 🚀 Live Demo

**[Launch iPod Classic Player](https://rocketproduction.github.io/iPod-classic/)**

## 📱 Installation

### On Mobile (Android/iOS)
1. Visit the link above in Chrome/Safari
2. Tap the menu (⋮) or share button
3. Select "Add to Home Screen" or "Install App"
4. Launch from your home screen

### On Desktop
1. Visit the link in Chrome/Edge
2. Click the install icon in the address bar
3. Or use the browser menu → "Install iPod Classic"

## 🎮 Controls

### Click Wheel
- **Rotate clockwise** - Scroll down / Increase volume (in Now Playing)
- **Rotate counter-clockwise** - Scroll up / Decrease volume
- **Center button** - Select / Play-Pause
- **Menu button** - Go back
- **Forward/Back buttons** - Next/Previous track

### Keyboard (Desktop)
- **↑↓** - Navigate menus
- **Enter** - Select
- **Escape** - Go back
- **Space** - Play/Pause
- **←→** - Previous/Next track

### Touch Gestures
- **Swipe on wheel** - Circular navigation
- **Tap center** - Select
- **Tap areas** - Menu, Play/Pause, Prev, Next

## 🛠️ Technical Details

- **Pure vanilla JavaScript** - No frameworks, no dependencies
- **Single HTML file** - Everything bundled for simplicity
- **Service Worker** - Offline caching and background sync
- **Web Audio API** - Parametric EQ implementation
- **MediaSession API** - Native media controls integration
- **IndexedDB ready** - For future persistent storage

## 📂 Project Structure

```
iPod-classic/
├── index.html          # Main application (HTML + CSS + JS)
├── sw.js               # Service Worker for offline support
├── manifest.webmanifest # PWA manifest
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── icon-512-maskable.png
```

## 🔧 Local Development

To run locally:

```bash
# Clone the repository
git clone https://github.com/RocketProduction/iPod-classic.git
cd iPod-classic

# Serve with any static server, e.g.:
python -m http.server 8000
# or
npx serve .

# Open http://localhost:8000
```

> **Note:** PWA features (install, offline) require HTTPS or localhost.

## 📋 Browser Support

| Browser | Support |
|---------|---------|
| Chrome (Android) | ✅ Full support |
| Safari (iOS) | ✅ Full support |
| Chrome (Desktop) | ✅ Full support |
| Firefox | ✅ Partial (no install) |
| Edge | ✅ Full support |

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Apple for the original iPod design inspiration
- [LRCLIB](https://lrclib.net/) for synced lyrics API
- [jsmediatags](https://github.com/aadsm/jsmediatags) for audio metadata parsing
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/) for album artwork

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/RocketProduction">RocketProduction</a>
</p>

<p align="center">
  <i>This is a fan project and is not affiliated with Apple Inc.</i>
</p>
