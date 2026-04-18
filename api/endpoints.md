# API Endpoints

> [← Back to Documentation Home](../README.md)

Complete REST API reference for the Unnamed Translate backend.

## Table of Contents

- [POST /translate](#post-translate) - Translate text
- [POST /dictionary](#post-dictionary) - Word lookup
- [POST /rewrite](#post-rewrite) - Grammar correction
- [Error Handling](#error-handling)

## POST /translate

Translate text between languages with optional tone and variant control.

### Request
```json
{
  "text": "Hello world",
  "source_lang": "en",
  "target_lang": "vi",
  "tone": "casual",
  "variants": 2,
  "role": "friendly"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "source": {
      "text": "Hello world",
      "lang": "en",
      "detected": false
    },
    "target": {
      "lang": "vi",
      "translations": [
        "Chào thế giới",
        "Xin chào"
      ],
      "confidence": 0.95,
      "tone": "casual"
    },
    "dictionary": [...],
    "reverse_check": {
      "text": "Hello world",
      "back_translation": "Hello world",
      "semantic_similarity": 0.98
    }
  },
  "meta": {
    "request_id": "uuid",
    "cached": false,
    "processing_time_ms": 450
  }
}
```

### Parameters

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | Yes | Text to translate (max 2000 chars) |
| `source_lang` | string | Yes | Source language code (`auto`, `en`, `vi`, etc.) |
| `target_lang` | string | Yes | Target language code |
| `tone` | string | No | `natural`, `casual`, `formal`, `business` |
| `role` | string | No | `neutral`, `friendly`, `sarcastic`, `npc` |
| `variants` | int | No | Number of translation variants (1-3) |
| `include_dictionary` | bool | No | Include word definitions |

## POST /dictionary

Look up word definition with pronunciation and examples.

### Request
```json
{
  "word": "hello",
  "lang": "en",
  "target_lang": "vi",
  "include_pronunciation": true
}
```

### Response
```json
{
  "success": true,
  "data": {
    "word": "hello",
    "phonetic": "/həˈloʊ/",
    "pronunciation": { "audio": "..." },
    "meanings": [
      {
        "partOfSpeech": "interjection",
        "definitions": [
          {
            "definition": "Used as a greeting",
            "example": "Hello, how are you?",
            "translation": "Xin chào, bạn khỏe không?"
          }
        ]
      }
    ]
  }
}
```

## POST /rewrite

Grammar correction and text rewriting.

### Operations

| Operation | Description |
|-----------|-------------|
| `grammar_correction` | Fix grammar errors |
| `natural_rewrite` | Make text sound natural |
| `formal_rewrite` | Convert to formal tone |
| `simplify` | Simplify complex text |

### Request
```json
{
  "text": "Me go store",
  "operation": "grammar_correction",
  "target_lang": "en"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "original": "Me go store",
    "rewritten": "I am going to the store",
    "changes": [
      {
        "type": "grammar",
        "original": "Me go",
        "correction": "I am going",
        "explanation": "Subject-verb agreement"
      }
    ],
    "confidence": 0.92
  }
}
```

## Error Handling

All errors return a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "details": { "retry_after": 60 }
  },
  "meta": {
    "request_id": "uuid"
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_REQUEST` | 400 | Bad request format |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `AI_SERVICE_ERROR` | 502 | AI service unavailable |
| `INTERNAL_ERROR` | 500 | Server error |

## Related Documentation

- [Architecture Overview](../architecture/overview.md) - System design
- [Deployment Guide](../deployment/vps.md) - Server setup
- [User Guide](../user/guide-vi.md) - End user documentation
