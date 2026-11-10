"""Generate favicon + apple-touch icons (cyan→violet gradient) tanpa dependency."""
import os
import struct
import zlib


def make_icon(size: int, path: str) -> None:
    c1 = (34, 211, 238)   # cyan
    c2 = (139, 92, 246)   # violet
    corner = size * 0.22
    raw = bytearray()
    for y in range(size):
        raw.append(0)
        for x in range(size):
            alpha = 255
            nx = min(x, size - 1 - x)
            ny = min(y, size - 1 - y)
            if nx < corner and ny < corner:
                dx = corner - nx
                dy = corner - ny
                if dx * dx + dy * dy > corner * corner:
                    alpha = 0
            t = (x + y) / (2 * (size - 1))
            r = int(c1[0] + (c2[0] - c1[0]) * t)
            g = int(c1[1] + (c2[1] - c1[1]) * t)
            b = int(c1[2] + (c2[2] - c1[2]) * t)
            raw += bytes((r, g, b, alpha))

    def chunk(tag: bytes, data: bytes) -> bytes:
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        )

    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr)
    png += chunk(b"IDAT", zlib.compress(bytes(raw), 9)) + chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(png)
    print("wrote", path, os.path.getsize(path), "bytes")


if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    make_icon(32, "public/favicon.png")
    make_icon(180, "public/apple-touch-icon.png")