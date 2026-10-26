# Muse Cloudflare icon-symlink validation fixture

This repository is a bounded Meta Muse bug-bounty validation fixture. Its root
`icon.webp` is a Git symbolic link to `/etc/os-release`, a non-secret operating
system identification file. The fixture tests whether Muse preserves that link
through clone and whether the Cloudflare exporter follows it during publication.

It intentionally contains no credentials, persistence, authorization bypass, or
code that reads host files. The only test primitive is the Git symlink itself.
